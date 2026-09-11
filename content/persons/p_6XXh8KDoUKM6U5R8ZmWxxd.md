---
schema: wang-person/v1
id: p_6XXh8KDoUKM6U5R8ZmWxxd
status: active
merged_into: null
display_name: 王伊初
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTRbxM8n89PvacZUk1TqED
        subject_person_id: p_6XXh8KDoUKM6U5R8ZmWxxd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伊初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rm4Qxpwd9G39cEu2UrXN3X
          claim_id: c_zTRbxM8n89PvacZUk1TqED
          source_id: s_HmWXLdUg8wYtdazgu5dUzc
          stance: supports
          locator: CBDB:560054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560054）
          source: &a1
            id: s_HmWXLdUg8wYtdazgu5dUzc
            source_type: api_record
            title: 中国历代人物传记资料库：王伊初（CBDB 560054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560054&o=json
            external_identifier: CBDB:560054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MiQbJ8SKN3zPgfVJ6RxbGE
        subject_person_id: p_6XXh8KDoUKM6U5R8ZmWxxd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伊初，清人物。籍贯信陽州，入仕進士。（中国历代人物传记资料库 CBDB 560054）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qp08t4BEgJfv-_qZnYoZAb
          claim_id: c_MiQbJ8SKN3zPgfVJ6RxbGE
          source_id: s_HmWXLdUg8wYtdazgu5dUzc
          stance: supports
          locator: CBDB:560054
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

# 王伊初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伊初 | accepted |
| bio.summary | 王伊初，清人物。籍贯信陽州，入仕進士。（中国历代人物传记资料库 CBDB 560054） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伊初（CBDB 560054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560054&o=json)
