---
schema: wang-person/v1
id: p_rPQwNRR3778vPLDizaxFNZ
status: active
merged_into: null
display_name: 王元俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j6THbTxCyHLh3hJGmXhCUh
        subject_person_id: p_rPQwNRR3778vPLDizaxFNZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3JPdSaLhz3ALc84FPvR6z7
          claim_id: c_j6THbTxCyHLh3hJGmXhCUh
          source_id: s_veCya1J17hkRoxLdBqDkyt
          stance: supports
          locator: CBDB:235473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235473）
          source: &a1
            id: s_veCya1J17hkRoxLdBqDkyt
            source_type: api_record
            title: 中国历代人物传记资料库：王元俊（CBDB 235473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json
            external_identifier: CBDB:235473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b3K9gzgG8htMz3ueU6FHSS
        subject_person_id: p_rPQwNRR3778vPLDizaxFNZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元俊，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235473）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pOxFFa2OpxwVbq5KA-QVNz
          claim_id: c_b3K9gzgG8htMz3ueU6FHSS
          source_id: s_veCya1J17hkRoxLdBqDkyt
          stance: supports
          locator: CBDB:235473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ber57rTz8gTR7joE-z1qwA
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rPQwNRR3778vPLDizaxFNZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3IIJrbkadiK4XmAtOFutv
          claim_id: c_Ber57rTz8gTR7joE-z1qwA
          source_id: s_njHpuqJsHJ-tTz9NBvJWG_
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元俊 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元俊 之父／母。
          source:
            id: s_njHpuqJsHJ-tTz9NBvJWG_
            source_type: api_record
            title: 中国历代人物传记资料库：王元俊（CBDB 235473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json
            external_identifier: CBDB:235473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GoCZ6LMqwnyLpJJPbTAtp
        status: active
        display_name: 王溉槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_d5WFmVGWpCWACnVWhoIvn7
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPQwNRR3778vPLDizaxFNZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xdgXn0YikZ8qjL3mzf640C
          claim_id: c_d5WFmVGWpCWACnVWhoIvn7
          source_id: s_njHpuqJsHJ-tTz9NBvJWG_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_njHpuqJsHJ-tTz9NBvJWG_
            source_type: api_record
            title: 中国历代人物传记资料库：王元俊（CBDB 235473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json
            external_identifier: CBDB:235473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
---

# 王元俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元俊 | accepted |
| bio.summary | 王元俊，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GoCZ6LMqwnyLpJJPbTAtp | 王溉槐 | accepted |
| other | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元俊（CBDB 235473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json)
