---
schema: wang-person/v1
id: p_M5jXbxrFJUfUWj3y9dNPfh
status: active
merged_into: null
display_name: 王元晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pK3nJdXZeqp2vuzcJiUBiW
        subject_person_id: p_M5jXbxrFJUfUWj3y9dNPfh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NKQ5W5K8ypwGXnwEFWoLKD
          claim_id: c_pK3nJdXZeqp2vuzcJiUBiW
          source_id: s_wkAqzdv8SpPBjk2Ws34PQW
          stance: supports
          locator: CBDB:71376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71376）
          source: &a1
            id: s_wkAqzdv8SpPBjk2Ws34PQW
            source_type: api_record
            title: 中国历代人物传记资料库：王元晉（CBDB 71376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71376&o=json
            external_identifier: CBDB:71376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VWzNPfJNdLBMGun5tCFjj4
        subject_person_id: p_M5jXbxrFJUfUWj3y9dNPfh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TU2ThVBCeAdb1AwHWzK4EZ
          claim_id: c_VWzNPfJNdLBMGun5tCFjj4
          source_id: s_wkAqzdv8SpPBjk2Ws34PQW
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
        id: c_8LTWnJLu2LpFj6jGByQHAQ
        subject_person_id: p_M5jXbxrFJUfUWj3y9dNPfh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元晉（生于1621年），清人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 71376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1qnhwyoTL_ZZC2lPBlK6aS
          claim_id: c_8LTWnJLu2LpFj6jGByQHAQ
          source_id: s_wkAqzdv8SpPBjk2Ws34PQW
          stance: supports
          locator: CBDB:71376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元晉 | accepted |
| birth.date | 1621年 | accepted |
| bio.summary | 王元晉（生于1621年），清人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 71376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元晉（CBDB 71376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71376&o=json)
