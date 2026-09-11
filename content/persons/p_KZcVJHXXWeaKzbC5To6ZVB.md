---
schema: wang-person/v1
id: p_KZcVJHXXWeaKzbC5To6ZVB
status: active
merged_into: null
display_name: 王化廣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DzKZBo1zvMEAP9M98uiyPH
        subject_person_id: p_KZcVJHXXWeaKzbC5To6ZVB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H91SVmGMQv3MzbUG7KVqeG
          claim_id: c_DzKZBo1zvMEAP9M98uiyPH
          source_id: s_kUer5HN3niUH4sjBBbLTKB
          stance: supports
          locator: CBDB:636396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636396）
          source: &a1
            id: s_kUer5HN3niUH4sjBBbLTKB
            source_type: api_record
            title: 中国历代人物传记资料库：王化廣（CBDB 636396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636396&o=json
            external_identifier: CBDB:636396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RuUMHCLh5u7z4GSkC9ru4Q
        subject_person_id: p_KZcVJHXXWeaKzbC5To6ZVB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化廣，清人物。籍贯密縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7d00D4hHArFcJrw7Mxc4q5
          claim_id: c_RuUMHCLh5u7z4GSkC9ru4Q
          source_id: s_kUer5HN3niUH4sjBBbLTKB
          stance: supports
          locator: CBDB:636396
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

# 王化廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化廣 | accepted |
| bio.summary | 王化廣，清人物。籍贯密縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化廣（CBDB 636396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636396&o=json)
