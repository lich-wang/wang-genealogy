---
schema: wang-person/v1
id: p_XGoteYhG9MDhFVfGZgERHN
status: active
merged_into: null
display_name: 王世及
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wiAYgWbSaZEoGR2daZ27mi
        subject_person_id: p_XGoteYhG9MDhFVfGZgERHN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世及
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3nY4ZmM7trMAr7L6b3VW5
          claim_id: c_wiAYgWbSaZEoGR2daZ27mi
          source_id: s_o81LGj9rsPbfk1i9cCVinG
          stance: supports
          locator: CBDB:38407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38407）
          source: &a1
            id: s_o81LGj9rsPbfk1i9cCVinG
            source_type: api_record
            title: 中国历代人物传记资料库：王世及（CBDB 38407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38407&o=json
            external_identifier: CBDB:38407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sepnP8p4r133KPJfmNVmE6
        subject_person_id: p_XGoteYhG9MDhFVfGZgERHN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世及，宋人物。籍贯河陰，身份为義門。（中国历代人物传记资料库 CBDB 38407）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A-aW0eog_8Rtp6Ff7ahZDg
          claim_id: c_sepnP8p4r133KPJfmNVmE6
          source_id: s_o81LGj9rsPbfk1i9cCVinG
          stance: supports
          locator: CBDB:38407
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

# 王世及

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世及 | accepted |
| bio.summary | 王世及，宋人物。籍贯河陰，身份为義門。（中国历代人物传记资料库 CBDB 38407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世及（CBDB 38407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38407&o=json)
