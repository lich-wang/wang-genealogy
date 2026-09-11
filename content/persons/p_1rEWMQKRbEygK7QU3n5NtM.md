---
schema: wang-person/v1
id: p_1rEWMQKRbEygK7QU3n5NtM
status: active
merged_into: null
display_name: 王國寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZhZz4PqDUmodBo3AJDQK8b
        subject_person_id: p_1rEWMQKRbEygK7QU3n5NtM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_86N9FNiN334wK54pGk5hfA
          claim_id: c_ZhZz4PqDUmodBo3AJDQK8b
          source_id: s_AQLZzbQtgfMMn5nfT94ip3
          stance: supports
          locator: CBDB:693687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693687）
          source: &a1
            id: s_AQLZzbQtgfMMn5nfT94ip3
            source_type: api_record
            title: 中国历代人物传记资料库：王國寶（CBDB 693687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693687&o=json
            external_identifier: CBDB:693687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W2Y3TW5pacKcFXF6gHPpHN
        subject_person_id: p_1rEWMQKRbEygK7QU3n5NtM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V7bx2bn5JCQbuoaNeHFVY3
          claim_id: c_W2Y3TW5pacKcFXF6gHPpHN
          source_id: s_AQLZzbQtgfMMn5nfT94ip3
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
        id: c_3Jy3EPqU6Y16f7c8zN4SyD
        subject_person_id: p_1rEWMQKRbEygK7QU3n5NtM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寶（卒于1867年），清人物。籍贯吳縣，身份为死國難，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 693687）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZLa-nikb4TUod7j0jMdtKv
          claim_id: c_3Jy3EPqU6Y16f7c8zN4SyD
          source_id: s_AQLZzbQtgfMMn5nfT94ip3
          stance: supports
          locator: CBDB:693687
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

# 王國寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國寶 | accepted |
| death.date | 1867年 | accepted |
| bio.summary | 王國寶（卒于1867年），清人物。籍贯吳縣，身份为死國難，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 693687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國寶（CBDB 693687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693687&o=json)
