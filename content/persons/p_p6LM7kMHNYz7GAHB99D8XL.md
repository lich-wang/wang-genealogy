---
schema: wang-person/v1
id: p_p6LM7kMHNYz7GAHB99D8XL
status: active
merged_into: null
display_name: 王顯道
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GiyV8wV4Mt8G7GP1iUBFbg
        subject_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_srCfLpWGpCRPXn7EiBL3FL
          claim_id: c_GiyV8wV4Mt8G7GP1iUBFbg
          source_id: s_1ZQ5a7ijrWSvL1zqCVdn2j
          stance: supports
          locator: CBDB:201310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201310）
          source: &a1
            id: s_1ZQ5a7ijrWSvL1zqCVdn2j
            source_type: api_record
            title: 中国历代人物传记资料库：王顯道（CBDB 201310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201310&o=json
            external_identifier: CBDB:201310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UVMJh523DQAEeoGN1VLRqi
        subject_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTepCQcyTcqvm1KV84QMdu
          claim_id: c_UVMJh523DQAEeoGN1VLRqi
          source_id: s_1ZQ5a7ijrWSvL1zqCVdn2j
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
        id: c_fHNvSbpdgop9TG4EMjKeHJ
        subject_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯道（生于1458年），明人物。明清進士進士，籍贯鹽山，入仕進士。（中国历代人物传记资料库 CBDB 201310）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I6stfGYus12aLOx8_Sd5HF
          claim_id: c_fHNvSbpdgop9TG4EMjKeHJ
          source_id: s_1ZQ5a7ijrWSvL1zqCVdn2j
          stance: supports
          locator: CBDB:201310
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MCQVAs4Fmrf89qEhHOoJ6p
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dcJpOwOUQG4K-L1g7M7dAZ
          claim_id: c_MCQVAs4Fmrf89qEhHOoJ6p
          source_id: s_4P3H53m9s75BCXnWaQcBse
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4P3H53m9s75BCXnWaQcBse
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 270427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270427&o=json
            external_identifier: CBDB:270427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_USmM7iSRa4vK3jsnZL7c34
        status: active
        display_name: 王文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8pd2pIebWMoisAJaK2n00X
        subject_person_id: p_EjHbdW3cwgQuNaYfk7ph2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z69pUbFX5e1Fn8rTbCMnP1
          claim_id: c_8pd2pIebWMoisAJaK2n00X
          source_id: s_SR5qejf98kER5C4yvGAdn8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SR5qejf98kER5C4yvGAdn8
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 270426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270426&o=json
            external_identifier: CBDB:270426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EjHbdW3cwgQuNaYfk7ph2H
        status: active
        display_name: 王聰
        merged_into_person_id: null
    - claim:
        id: c_G6cmf9uU7mSefWaOsJ9Rah
        subject_person_id: p_YdHD6Ani5j96DGFyD2Zuh3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDJBkxKGhrORIeVx9nubSl
          claim_id: c_G6cmf9uU7mSefWaOsJ9Rah
          source_id: s_71gnzcGvQF8nyYCr1x6qwN
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_71gnzcGvQF8nyYCr1x6qwN
            source_type: api_record
            title: 中国历代人物传记资料库：王原魯（CBDB 270425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270425&o=json
            external_identifier: CBDB:270425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_YdHD6Ani5j96DGFyD2Zuh3
        status: active
        display_name: 王原魯
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_FxEB3OzE_likUBkJUt9IMc
        subject_person_id: p_34cS2Kr834iH2AeExpmt6V
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DzeiBzCj4j_MZE7RfGvyU
          claim_id: c_FxEB3OzE_likUBkJUt9IMc
          source_id: s_PQ7G6VxfsxlmM24ju7ibvv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PQ7G6VxfsxlmM24ju7ibvv
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 270436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270436&o=json
            external_identifier: CBDB:270436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_34cS2Kr834iH2AeExpmt6V
        status: active
        display_name: 王立道
        merged_into_person_id: null
    - claim:
        id: c_NUe07cgJIltR2y4aLN9vXG
        subject_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8_Ff8AbHjy2GvWwRmWC0g4
          claim_id: c_NUe07cgJIltR2y4aLN9vXG
          source_id: s_8e4J-1_PEs-Xm80wSxnjk4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8e4J-1_PEs-Xm80wSxnjk4
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 270431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json
            external_identifier: CBDB:270431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EGWu3kuNQhVSiewcJGE7Qn
        status: active
        display_name: 王弘道
        merged_into_person_id: null
    - claim:
        id: c_1VJQ5YHAW2nfe7koyklQNE
        subject_person_id: p_L1Ho9yrtJTHQudAEoWQ1BH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GU1cGp61G32Jn0yFzWRwYN
          claim_id: c_1VJQ5YHAW2nfe7koyklQNE
          source_id: s_buP98Ush87pfUgYtWdkNoD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_buP98Ush87pfUgYtWdkNoD
            source_type: api_record
            title: 中国历代人物传记资料库：王友道（CBDB 270433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json
            external_identifier: CBDB:270433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L1Ho9yrtJTHQudAEoWQ1BH
        status: active
        display_name: 王友道
        merged_into_person_id: null
    - claim:
        id: c_UZt04c1YR7nPrz31RcIcou
        subject_person_id: p_Nbyp7Q45BBMbVdfdxRf8mP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YeSaynUzR8FVWK28JKOMDq
          claim_id: c_UZt04c1YR7nPrz31RcIcou
          source_id: s_zFChXzTW0jg_oYvsF6hw1k
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zFChXzTW0jg_oYvsF6hw1k
            source_type: api_record
            title: 中国历代人物传记资料库：王凝道（CBDB 270434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270434&o=json
            external_identifier: CBDB:270434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nbyp7Q45BBMbVdfdxRf8mP
        status: active
        display_name: 王凝道
        merged_into_person_id: null
    - claim:
        id: c_ei705aug0qBtU-Ev3ZrK0B
        subject_person_id: p_RGeyL1DKo6yERKUnwsv1J8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6hw304wppnV-Srgdr6Wzd4
          claim_id: c_ei705aug0qBtU-Ev3ZrK0B
          source_id: s_f6Yi4WXsc-hRa156olTFVS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f6Yi4WXsc-hRa156olTFVS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 270432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270432&o=json
            external_identifier: CBDB:270432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RGeyL1DKo6yERKUnwsv1J8
        status: active
        display_name: 王宗道
        merged_into_person_id: null
    - claim:
        id: c_c-blukS1IbwKaIT0cv6P40
        subject_person_id: p_X8AwhcwnhmdWwbA9qts7mg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_En-UeCqqgUH3R1DWmV6yTJ
          claim_id: c_c-blukS1IbwKaIT0cv6P40
          source_id: s_iQmnN3ufkYtw2tcIrhks6Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iQmnN3ufkYtw2tcIrhks6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 270435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270435&o=json
            external_identifier: CBDB:270435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8AwhcwnhmdWwbA9qts7mg
        status: active
        display_name: 王志道
        merged_into_person_id: null
---

# 王顯道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯道 | accepted |
| birth.date | 1458年 | accepted |
| bio.summary | 王顯道（生于1458年），明人物。明清進士進士，籍贯鹽山，入仕進士。（中国历代人物传记资料库 CBDB 201310） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_USmM7iSRa4vK3jsnZL7c34 | 王文 | accepted |
| ancestors | p_EjHbdW3cwgQuNaYfk7ph2H | 王聰 | accepted |
| ancestors | p_YdHD6Ani5j96DGFyD2Zuh3 | 王原魯 | accepted |
| other | p_34cS2Kr834iH2AeExpmt6V | 王立道 | accepted |
| other | p_EGWu3kuNQhVSiewcJGE7Qn | 王弘道 | accepted |
| other | p_L1Ho9yrtJTHQudAEoWQ1BH | 王友道 | accepted |
| other | p_Nbyp7Q45BBMbVdfdxRf8mP | 王凝道 | accepted |
| other | p_RGeyL1DKo6yERKUnwsv1J8 | 王宗道 | accepted |
| other | p_X8AwhcwnhmdWwbA9qts7mg | 王志道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 270426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270426&o=json)
- [中国历代人物传记资料库：王弘道（CBDB 270431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json)
- [中国历代人物传记资料库：王立道（CBDB 270436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270436&o=json)
- [中国历代人物传记资料库：王凝道（CBDB 270434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270434&o=json)
- [中国历代人物传记资料库：王文（CBDB 270427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270427&o=json)
- [中国历代人物传记资料库：王顯道（CBDB 201310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201310&o=json)
- [中国历代人物传记资料库：王友道（CBDB 270433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json)
- [中国历代人物传记资料库：王原魯（CBDB 270425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270425&o=json)
- [中国历代人物传记资料库：王志道（CBDB 270435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270435&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 270432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270432&o=json)
