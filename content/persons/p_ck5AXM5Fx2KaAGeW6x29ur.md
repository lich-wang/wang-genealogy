---
schema: wang-person/v1
id: p_ck5AXM5Fx2KaAGeW6x29ur
status: active
merged_into: null
display_name: 王闐
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1S649TbWFN3bs5UMDTsSpZ
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCRBKcCg1wUNazK85fbiHu
          claim_id: c_1S649TbWFN3bs5UMDTsSpZ
          source_id: s_UAF9bwtY6LRGzyASYuQF8D
          stance: supports
          locator: CBDB:204766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204766）
          source: &a1
            id: s_UAF9bwtY6LRGzyASYuQF8D
            source_type: api_record
            title: 中国历代人物传记资料库：王闐（CBDB 204766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204766&o=json
            external_identifier: CBDB:204766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GtEoZS7SxVPrqSRNDzPWhA
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCiAAcDFmt9Eg2bAMY3xNd
          claim_id: c_GtEoZS7SxVPrqSRNDzPWhA
          source_id: s_UAF9bwtY6LRGzyASYuQF8D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eQU29UhNrL72Dp74GFzfe1
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闐（生于1524年），明人物。嘉靖三十八年進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 204766）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JzM_-v5ahi5Pmuo6OtevpW
          claim_id: c_eQU29UhNrL72Dp74GFzfe1
          source_id: s_UAF9bwtY6LRGzyASYuQF8D
          stance: supports
          locator: CBDB:204766
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vab8uOvRywmp23WiJ0gOMH
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ei7eg6CfhQzNBCUMYZdXN
          claim_id: c_Vab8uOvRywmp23WiJ0gOMH
          source_id: s_rcdfHky1Q4AUJutcJkZsRY
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第七十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rcdfHky1Q4AUJutcJkZsRY
            source_type: api_record
            title: 中国历代人物传记资料库：王德純（CBDB 323748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323748&o=json
            external_identifier: CBDB:323748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7qYVpNXr3rJeGDwdypL9Mb
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_czJSJilUcdRIU3OJcwS22T
        subject_person_id: p_dHDE8CHXuP6VtSC9J5FReU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HWTYVCSVzaP1WMvvlxAACi
          claim_id: c_czJSJilUcdRIU3OJcwS22T
          source_id: s_cNVnqrB19Mv4EJBAUqx157
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cNVnqrB19Mv4EJBAUqx157
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 323747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323747&o=json
            external_identifier: CBDB:323747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHDE8CHXuP6VtSC9J5FReU
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_Y3Z7xclVvPAYhTnbWK5idI
        subject_person_id: p_DmMVJMmz6V9do4ASjEo6Zz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3d_uiRfx6nuWwpZOPeQOrr
          claim_id: c_Y3Z7xclVvPAYhTnbWK5idI
          source_id: s_jKNB8k4dr4vhHgJ9GuUH16
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第七十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jKNB8k4dr4vhHgJ9GuUH16
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 323746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323746&o=json
            external_identifier: CBDB:323746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DmMVJMmz6V9do4ASjEo6Zz
        status: active
        display_name: 王浩
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_NeudA2spCC9pX14gyceumx
        subject_person_id: p_ByfedhZMkQZ2osvi5pfvXp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Ou0LYiUGHzFP5zgVKEv5i
          claim_id: c_NeudA2spCC9pX14gyceumx
          source_id: s_2G_bmNmmHVkpldpmLe5aOR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2G_bmNmmHVkpldpmLe5aOR
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 323758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323758&o=json
            external_identifier: CBDB:323758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ByfedhZMkQZ2osvi5pfvXp
        status: active
        display_name: 王閔
        merged_into_person_id: null
    - claim:
        id: c_JRU5pO0mOLe3aiMlAsGTLL
        subject_person_id: p_ECAXe9vm33fKhmKg8C8s5P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FYRDvT8-jON-wLtHHVuY7f
          claim_id: c_JRU5pO0mOLe3aiMlAsGTLL
          source_id: s_6pKUJwr6WNQ2WjOmXhfpx-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6pKUJwr6WNQ2WjOmXhfpx-
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 323754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json
            external_identifier: CBDB:323754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ECAXe9vm33fKhmKg8C8s5P
        status: active
        display_name: 王閥
        merged_into_person_id: null
    - claim:
        id: c_bzEK2CyLcRp6JrxiK2w0Xh
        subject_person_id: p_MSCyNBhmLhN1rocpXFaZoL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXmuXGSP6iUcBK5zWIegCf
          claim_id: c_bzEK2CyLcRp6JrxiK2w0Xh
          source_id: s_bUKtWhvPFeXinpj1yJ8HbZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bUKtWhvPFeXinpj1yJ8HbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王闙（CBDB 323755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json
            external_identifier: CBDB:323755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MSCyNBhmLhN1rocpXFaZoL
        status: active
        display_name: 王闙
        merged_into_person_id: null
    - claim:
        id: c_qEaAOCRbI5Gnxee_5auvWU
        subject_person_id: p_V91UZRWyAuB7hrJMpTkccY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inhyBvv5pKPVSkZCQz9x11
          claim_id: c_qEaAOCRbI5Gnxee_5auvWU
          source_id: s_JakK26WQKUnAG7haLB7NzB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JakK26WQKUnAG7haLB7NzB
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 323753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323753&o=json
            external_identifier: CBDB:323753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V91UZRWyAuB7hrJMpTkccY
        status: active
        display_name: 王問
        merged_into_person_id: null
    - claim:
        id: c_m6itfg1dWuh25P_k_08IIU
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ufvz3RwcXPlVS_7QfKJPJu
          claim_id: c_m6itfg1dWuh25P_k_08IIU
          source_id: s_YoObEK8IlHTz34Ux2gjoZT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YoObEK8IlHTz34Ux2gjoZT
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 323757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json
            external_identifier: CBDB:323757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dwGp6jGuD9i2ghEHfvT8CV
        status: active
        display_name: 王闕
        merged_into_person_id: null
    - claim:
        id: c_okrQULdXgoJ06Cm2E-ax9o
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o5TL75x34Lta8LsAnkS1c1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNnjJthBl-aX0LXftcPaC9
          claim_id: c_okrQULdXgoJ06Cm2E-ax9o
          source_id: s_YZ9-1VUmSHoC47jvJ_yzdF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YZ9-1VUmSHoC47jvJ_yzdF
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 323751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json
            external_identifier: CBDB:323751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o5TL75x34Lta8LsAnkS1c1
        status: active
        display_name: 王闉
        merged_into_person_id: null
    - claim:
        id: c_qoKMBraPx4ZKh-L6w2BEga
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p2gM1mATmRAMnvVgUtfH2R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hL9tXnAtOaHrFfQxDQfp61
          claim_id: c_qoKMBraPx4ZKh-L6w2BEga
          source_id: s_Y7IMKw8qwmIGbf2yACNhWi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Y7IMKw8qwmIGbf2yACNhWi
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 323756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json
            external_identifier: CBDB:323756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p2gM1mATmRAMnvVgUtfH2R
        status: active
        display_name: 王開
        merged_into_person_id: null
---

# 王闐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闐 | accepted |
| birth.date | 1524年 | accepted |
| bio.summary | 王闐（生于1524年），明人物。嘉靖三十八年進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 204766） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qYVpNXr3rJeGDwdypL9Mb | 王德純 | accepted |
| ancestors | p_dHDE8CHXuP6VtSC9J5FReU | 王恩 | accepted |
| ancestors | p_DmMVJMmz6V9do4ASjEo6Zz | 王浩 | accepted |
| other | p_ByfedhZMkQZ2osvi5pfvXp | 王閔 | accepted |
| other | p_ECAXe9vm33fKhmKg8C8s5P | 王閥 | accepted |
| other | p_MSCyNBhmLhN1rocpXFaZoL | 王闙 | accepted |
| other | p_V91UZRWyAuB7hrJMpTkccY | 王問 | accepted |
| other | p_dwGp6jGuD9i2ghEHfvT8CV | 王闕 | accepted |
| other | p_o5TL75x34Lta8LsAnkS1c1 | 王闉 | accepted |
| other | p_p2gM1mATmRAMnvVgUtfH2R | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德純（CBDB 323748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323748&o=json)
- [中国历代人物传记资料库：王恩（CBDB 323747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323747&o=json)
- [中国历代人物传记资料库：王閥（CBDB 323754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json)
- [中国历代人物传记资料库：王浩（CBDB 323746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323746&o=json)
- [中国历代人物传记资料库：王開（CBDB 323756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json)
- [中国历代人物传记资料库：王閔（CBDB 323758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323758&o=json)
- [中国历代人物传记资料库：王闙（CBDB 323755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json)
- [中国历代人物传记资料库：王闕（CBDB 323757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json)
- [中国历代人物传记资料库：王闐（CBDB 204766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204766&o=json)
- [中国历代人物传记资料库：王問（CBDB 323753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323753&o=json)
- [中国历代人物传记资料库：王闉（CBDB 323751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json)
