---
schema: wang-person/v1
id: p_AJ36QsHYvNFFPiM32NAShM
status: active
merged_into: null
display_name: 王秉良
cbdb_id: 201458
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R7JqVSBWc2egRNHQB5hHp5
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉良（生于1473年），明人物。明清進士進士，籍贯西充，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 201458）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4OW3pgjQpkD1vUTAP0Zkba
          claim_id: c_R7JqVSBWc2egRNHQB5hHp5
          source_id: s_mDo1UKWcCJgtUpPrkvt4Mg
          stance: supports
          locator: CBDB:201458
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mDo1UKWcCJgtUpPrkvt4Mg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉良（CBDB 201458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201458&o=json
            external_identifier: CBDB:201458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4nMBLivJBvGYioC6oAs9A1
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1473年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1473-01-01
            latest: 1473-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZEKYp6pcCpskMzFQPDvdYg
          claim_id: c_4nMBLivJBvGYioC6oAs9A1
          source_id: s_mDo1UKWcCJgtUpPrkvt4Mg
          stance: supports
          locator: CBDB:201458
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1473
          source:
            id: s_mDo1UKWcCJgtUpPrkvt4Mg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉良（CBDB 201458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201458&o=json
            external_identifier: CBDB:201458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JEvvU8tyg5x5LfAPK5EUm4
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nUv63PshryCEDc4VLCaGsK
          claim_id: c_JEvvU8tyg5x5LfAPK5EUm4
          source_id: s_mDo1UKWcCJgtUpPrkvt4Mg
          stance: supports
          locator: CBDB:201458
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1473
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t6j9gCuv_9oCzW9vufhFJr
        subject_person_id: p_xTGz6CSCfnLnyJ3himBvrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AJ36QsHYvNFFPiM32NAShM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uRKDInb9SqZvNjheR4mF_f
          claim_id: c_t6j9gCuv_9oCzW9vufhFJr
          source_id: s_jQDTPHJoxAsFqcykPJunU1
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jQDTPHJoxAsFqcykPJunU1
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 272753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272753&o=json
            external_identifier: CBDB:272753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xTGz6CSCfnLnyJ3himBvrU
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_M-wuToyMTjD1IUXSye28zL
        subject_person_id: p_uv7Y4sorz1AJL6728idjYf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AJ36QsHYvNFFPiM32NAShM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVGEhi6vwoH4nEfHb6nl2Y
          claim_id: c_M-wuToyMTjD1IUXSye28zL
          source_id: s_CtC3GbwL4MAKsNyr47hF8c
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CtC3GbwL4MAKsNyr47hF8c
            source_type: api_record
            title: 中国历代人物传记资料库：王繼先（CBDB 272749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272749&o=json
            external_identifier: CBDB:272749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uv7Y4sorz1AJL6728idjYf
        status: active
        display_name: 王繼先
        merged_into_person_id: null
    - claim:
        id: c_XZ0IgWV2Nfj84xgA60c-5A
        subject_person_id: p_YzvBwyQMZHuRLG8VQ7VxZ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AJ36QsHYvNFFPiM32NAShM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wDkRlwcLkfttDOt8JrKJPl
          claim_id: c_XZ0IgWV2Nfj84xgA60c-5A
          source_id: s_cfeW7dCx5TH7Bk1MNqGkhW
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cfeW7dCx5TH7Bk1MNqGkhW
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 272752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272752&o=json
            external_identifier: CBDB:272752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YzvBwyQMZHuRLG8VQ7VxZ5
        status: active
        display_name: 王清
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_p1SKF20lXBifBVDJynu6IR
        subject_person_id: p_31Y7A8ctDck4rHzqHWU9S1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AJ36QsHYvNFFPiM32NAShM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0pk6kgsYKdVr7VaKOEesk8
          claim_id: c_p1SKF20lXBifBVDJynu6IR
          source_id: s_qXXhH64sOaZfKRgRpxvsn_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201458 王秉良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qXXhH64sOaZfKRgRpxvsn_
            source_type: api_record
            title: 中国历代人物传记资料库：王秉恭（CBDB 272759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272759&o=json
            external_identifier: CBDB:272759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_31Y7A8ctDck4rHzqHWU9S1
        status: active
        display_name: 王秉恭
        merged_into_person_id: null
    - claim:
        id: c_5AVjgCrt9WcXFY1e0NKP_i
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GCFGFLbb5w3812Ph1sajEv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TjYnswrWrM4Xt0KuGez08b
          claim_id: c_5AVjgCrt9WcXFY1e0NKP_i
          source_id: s_-qG6cNBc0ml3E8HertgXvW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201458 王秉良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-qG6cNBc0ml3E8HertgXvW
            source_type: api_record
            title: 中国历代人物传记资料库：王秉誠（CBDB 272758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272758&o=json
            external_identifier: CBDB:272758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GCFGFLbb5w3812Ph1sajEv
        status: active
        display_name: 王秉誠
        merged_into_person_id: null
    - claim:
        id: c_l7jJE_zcNJtKJGG6gbuthG
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GwTwAk8kgcw8JiRbnA9GB3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MpAuAHF1crSRHNkyrQe8Lt
          claim_id: c_l7jJE_zcNJtKJGG6gbuthG
          source_id: s_8BVb9TxWyJfg_t3Lxkvzl4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201458 王秉良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8BVb9TxWyJfg_t3Lxkvzl4
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 272756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json
            external_identifier: CBDB:272756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GwTwAk8kgcw8JiRbnA9GB3
        status: active
        display_name: 王秉彝
        merged_into_person_id: null
    - claim:
        id: c_QFEK22Mhy1QbD6L-GPkSfv
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RJcAp3N5Ep4AoiM8JQvChT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bb5jE-Ddu76GgAccthXL6r
          claim_id: c_QFEK22Mhy1QbD6L-GPkSfv
          source_id: s__GwT58q4xBySvZN1CUciI5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201458 王秉良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__GwT58q4xBySvZN1CUciI5
            source_type: api_record
            title: 中国历代人物传记资料库：王秉儉（CBDB 272760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272760&o=json
            external_identifier: CBDB:272760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RJcAp3N5Ep4AoiM8JQvChT
        status: active
        display_name: 王秉儉
        merged_into_person_id: null
    - claim:
        id: c_3G7x4JxSthcirFnol6wCQ6
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qoFSPRtHcy51aLyVN73KPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c_Z_BztgL0Oo_ocfMbyFvy
          claim_id: c_3G7x4JxSthcirFnol6wCQ6
          source_id: s_rL63Zjs7qMxLgRY3cxbKHh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201458 王秉良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rL63Zjs7qMxLgRY3cxbKHh
            source_type: api_record
            title: 中国历代人物传记资料库：王秉能（CBDB 272757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272757&o=json
            external_identifier: CBDB:272757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoFSPRtHcy51aLyVN73KPB
        status: active
        display_name: 王秉能
        merged_into_person_id: null
---

# 王秉良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秉良（生于1473年），明人物。明清進士進士，籍贯西充，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 201458） | accepted |
| birth.date | 1473年 | accepted |
| name.primary | 王秉良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xTGz6CSCfnLnyJ3himBvrU | 王俊 | accepted |
| ancestors | p_uv7Y4sorz1AJL6728idjYf | 王繼先 | accepted |
| ancestors | p_YzvBwyQMZHuRLG8VQ7VxZ5 | 王清 | accepted |
| other | p_31Y7A8ctDck4rHzqHWU9S1 | 王秉恭 | accepted |
| other | p_GCFGFLbb5w3812Ph1sajEv | 王秉誠 | accepted |
| other | p_GwTwAk8kgcw8JiRbnA9GB3 | 王秉彝 | accepted |
| other | p_RJcAp3N5Ep4AoiM8JQvChT | 王秉儉 | accepted |
| other | p_qoFSPRtHcy51aLyVN73KPB | 王秉能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉誠（CBDB 272758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272758&o=json)
- [中国历代人物传记资料库：王秉恭（CBDB 272759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272759&o=json)
- [中国历代人物传记资料库：王秉儉（CBDB 272760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272760&o=json)
- [中国历代人物传记资料库：王秉良（CBDB 201458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201458&o=json)
- [中国历代人物传记资料库：王秉能（CBDB 272757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272757&o=json)
- [中国历代人物传记资料库：王秉彝（CBDB 272756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json)
- [中国历代人物传记资料库：王繼先（CBDB 272749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272749&o=json)
- [中国历代人物传记资料库：王俊（CBDB 272753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272753&o=json)
- [中国历代人物传记资料库：王清（CBDB 272752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272752&o=json)
