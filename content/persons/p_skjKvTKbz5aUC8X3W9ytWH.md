---
schema: wang-person/v1
id: p_skjKvTKbz5aUC8X3W9ytWH
status: active
merged_into: null
display_name: 王崇文
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2YmZJQNhuxYNQJzqf7BiiH
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YtzTmyqSt4ViG978mDg7Cq
          claim_id: c_2YmZJQNhuxYNQJzqf7BiiH
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
          stance: supports
          locator: CBDB:126686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126686）
          source: &a1
            id: s_apmmDsyfoDaQxGCVQNrXEv
            source_type: api_record
            title: 中国历代人物传记资料库：王崇文（CBDB 126686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126686&o=json
            external_identifier: CBDB:126686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Gxg7X6z6uPzbQx8EWZWz3H
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_26xNEzU56L12YnG9WdR7Eg
          claim_id: c_Gxg7X6z6uPzbQx8EWZWz3H
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wjXMfuqVebqhDb1QHHne1t
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1520年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fw7KKPUFZb3kijM4bgk1o4
          claim_id: c_wjXMfuqVebqhDb1QHHne1t
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3q3cCwJMzNu7TDPfZRGAHX
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rUtGjs5BHADCkQAjFb1YJz
          claim_id: c_3q3cCwJMzNu7TDPfZRGAHX
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RpRnD0_WjsTkwzGIUqNVDx
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JZiIsJF4osc23_x51oUlzP
          claim_id: c_RpRnD0_WjsTkwzGIUqNVDx
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vys9dZU9Gy34qAcr5P9Ciw
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 266132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json
            external_identifier: CBDB:266132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7xPYAwpK8PS9R7QKy5varP
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_82yuwYTzBqu_wjiWcdL5u5
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9CLh8HQYnhj1Tk2CkBPsF
          claim_id: c_82yuwYTzBqu_wjiWcdL5u5
          source_id: s_h91pP7drCfPBv5PNUZEpMa
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h91pP7drCfPBv5PNUZEpMa
            source_type: api_record
            title: 中国历代人物传记资料库：王導（CBDB 266130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json
            external_identifier: CBDB:266130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DHkLaNrhXTyY2QbEp4wQXF
        status: active
        display_name: 王導
        merged_into_person_id: null
    - claim:
        id: c_mLJsmJCmnRKz-lWX8rBJ3z
        subject_person_id: p_iop7T8p6oTGjVpH3wXMe3j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtdvkP_bxYyH8ogUAg6aFA
          claim_id: c_mLJsmJCmnRKz-lWX8rBJ3z
          source_id: s_LqJQUzPTMHjFe1bT4CDBm8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LqJQUzPTMHjFe1bT4CDBm8
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 266131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266131&o=json
            external_identifier: CBDB:266131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iop7T8p6oTGjVpH3wXMe3j
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇文 | accepted |
| birth.date | 1468年 | accepted |
| death.date | 1520年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7xPYAwpK8PS9R7QKy5varP | 王珣 | accepted |
| ancestors | p_DHkLaNrhXTyY2QbEp4wQXF | 王導 | accepted |
| ancestors | p_iop7T8p6oTGjVpH3wXMe3j | 王蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇文（CBDB 126686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126686&o=json)
- [中国历代人物传记资料库：王導（CBDB 266130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json)
- [中国历代人物传记资料库：王蘭（CBDB 266131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266131&o=json)
- [中国历代人物传记资料库：王珣（CBDB 266132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json)
