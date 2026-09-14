---
schema: wang-person/v1
id: p_eonrrfCkN2hA5o48Aafwfz
status: active
merged_into: null
display_name: 王勉
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v9MmWyZapJ9jjJTcJ39tUs
        subject_person_id: p_eonrrfCkN2hA5o48Aafwfz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wFNWZNkjwSWG8PwJLSBpkM
          claim_id: c_v9MmWyZapJ9jjJTcJ39tUs
          source_id: s_csTmoGBzJXH8K4pDoksV65
          stance: supports
          locator: CBDB:199604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199604）
          source: &a1
            id: s_csTmoGBzJXH8K4pDoksV65
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 199604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199604&o=json
            external_identifier: CBDB:199604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_krJQPhr8ABFg3ens18BWAf
        subject_person_id: p_eonrrfCkN2hA5o48Aafwfz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1438年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_buyHSXkigaUfL1LRfDgLut
          claim_id: c_krJQPhr8ABFg3ens18BWAf
          source_id: s_csTmoGBzJXH8K4pDoksV65
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
        id: c_QyLnU7z9S5bz6Nm6VXk74P
        subject_person_id: p_eonrrfCkN2hA5o48Aafwfz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉（生于1438年），明人物。明清進士進士，籍贯宛平，入仕進士。（中国历代人物传记资料库 CBDB 199604）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t1Di_BILLIgDyw14TmZbtT
          claim_id: c_QyLnU7z9S5bz6Nm6VXk74P
          source_id: s_csTmoGBzJXH8K4pDoksV65
          stance: supports
          locator: CBDB:199604
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r77EnmtYLfjQ4Q8JMUUGLn
        subject_person_id: p_V5dXzxdRKFGtbUxcAc642k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cCzZR_6hR0HcqP71rW3W3m
          claim_id: c_r77EnmtYLfjQ4Q8JMUUGLn
          source_id: s_dJnE2DwLJWWvfoPpfN7Akq
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dJnE2DwLJWWvfoPpfN7Akq
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 247169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247169&o=json
            external_identifier: CBDB:247169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V5dXzxdRKFGtbUxcAc642k
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LAXOJB5wNFUkrTcm2e48qG
        subject_person_id: p_3t2k2RqpEMgyeEqsF12rQr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ4X4MwSC9nLArw_jqVnwV
          claim_id: c_LAXOJB5wNFUkrTcm2e48qG
          source_id: s_5PYdHQUN7Eo7tG1nRnkgi1
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5PYdHQUN7Eo7tG1nRnkgi1
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 247167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247167&o=json
            external_identifier: CBDB:247167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3t2k2RqpEMgyeEqsF12rQr
        status: active
        display_name: 王志道
        merged_into_person_id: null
    - claim:
        id: c_DGkaOj2Hdq2GOkQqEoJsWf
        subject_person_id: p_KtR8siJmH1dcjxDiMLEA9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sabvDfvXOLdBTtsWF5MCT
          claim_id: c_DGkaOj2Hdq2GOkQqEoJsWf
          source_id: s_JLeLhzLmFF36M5YtLkAKQa
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JLeLhzLmFF36M5YtLkAKQa
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 247168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247168&o=json
            external_identifier: CBDB:247168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KtR8siJmH1dcjxDiMLEA9S
        status: active
        display_name: 王日新
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Xxm-DE60k0OQThcSJCEbBb
        subject_person_id: p_7J2EXvoBG7ypFJeeG99Bmf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xQjgTRtLvRXwshvAg3wEod
          claim_id: c_Xxm-DE60k0OQThcSJCEbBb
          source_id: s_trTy6LRxrlnt2AqDkTwV0P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199604 王勉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_trTy6LRxrlnt2AqDkTwV0P
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 247174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247174&o=json
            external_identifier: CBDB:247174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7J2EXvoBG7ypFJeeG99Bmf
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_fQTAimEuh3Gh99NgWeIaYN
        subject_person_id: p_e392LnB7A4b6Nr7JWhMefS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CmKr8cY0L-dG_y0CpxHhAT
          claim_id: c_fQTAimEuh3Gh99NgWeIaYN
          source_id: s_PHJ5xeXf6pI0oSBRQsHsx1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199604 王勉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PHJ5xeXf6pI0oSBRQsHsx1
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 247173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json
            external_identifier: CBDB:247173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e392LnB7A4b6Nr7JWhMefS
        status: active
        display_name: 王憲
        merged_into_person_id: null
---

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| birth.date | 1438年 | accepted |
| bio.summary | 王勉（生于1438年），明人物。明清進士進士，籍贯宛平，入仕進士。（中国历代人物传记资料库 CBDB 199604） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V5dXzxdRKFGtbUxcAc642k | 王貴 | accepted |
| ancestors | p_3t2k2RqpEMgyeEqsF12rQr | 王志道 | accepted |
| ancestors | p_KtR8siJmH1dcjxDiMLEA9S | 王日新 | accepted |
| other | p_7J2EXvoBG7ypFJeeG99Bmf | 王章 | accepted |
| other | p_e392LnB7A4b6Nr7JWhMefS | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 247169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247169&o=json)
- [中国历代人物传记资料库：王勉（CBDB 199604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199604&o=json)
- [中国历代人物传记资料库：王日新（CBDB 247168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247168&o=json)
- [中国历代人物传记资料库：王憲（CBDB 247173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json)
- [中国历代人物传记资料库：王章（CBDB 247174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247174&o=json)
- [中国历代人物传记资料库：王志道（CBDB 247167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247167&o=json)
