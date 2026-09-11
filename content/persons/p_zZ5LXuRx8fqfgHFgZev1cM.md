---
schema: wang-person/v1
id: p_zZ5LXuRx8fqfgHFgZev1cM
status: active
merged_into: null
display_name: 王緩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aAEVWGFyvsYFU4n2yVk3Tt
        subject_person_id: p_zZ5LXuRx8fqfgHFgZev1cM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pYvpomK1MzeA5JYuWXHupE
          claim_id: c_aAEVWGFyvsYFU4n2yVk3Tt
          source_id: s_wuoM7KPNTbFvaHNz5ZyDrf
          stance: supports
          locator: CBDB:639848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639848）
          source: &a1
            id: s_wuoM7KPNTbFvaHNz5ZyDrf
            source_type: api_record
            title: 中国历代人物传记资料库：王緩（CBDB 639848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639848&o=json
            external_identifier: CBDB:639848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6rH3z6B5xrFdJHUoZKXsbe
        subject_person_id: p_zZ5LXuRx8fqfgHFgZev1cM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緩，清人物。籍贯西安，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_St6-kyczXup6xWq3jrQW6q
          claim_id: c_6rH3z6B5xrFdJHUoZKXsbe
          source_id: s_wuoM7KPNTbFvaHNz5ZyDrf
          stance: supports
          locator: CBDB:639848
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

# 王緩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緩 | accepted |
| bio.summary | 王緩，清人物。籍贯西安，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緩（CBDB 639848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639848&o=json)
