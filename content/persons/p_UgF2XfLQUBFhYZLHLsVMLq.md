---
schema: wang-person/v1
id: p_UgF2XfLQUBFhYZLHLsVMLq
status: active
merged_into: null
display_name: 王廷獻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFWqH8K7SVALxNt2kNrREL
        subject_person_id: p_UgF2XfLQUBFhYZLHLsVMLq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6QedzskZQUobJn7VJ23poH
          claim_id: c_oFWqH8K7SVALxNt2kNrREL
          source_id: s_vvJ8NEdbazT8Hc9UKGzTjQ
          stance: supports
          locator: CBDB:341915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341915）
          source: &a1
            id: s_vvJ8NEdbazT8Hc9UKGzTjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王廷獻（CBDB 341915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341915&o=json
            external_identifier: CBDB:341915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gXKov4yM8tiYYkgi5yMiJ1
        subject_person_id: p_UgF2XfLQUBFhYZLHLsVMLq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷獻，清人物。明清進士進士，籍贯海寧州，入仕進士，曾任戶部主事、鄉試考官。（中国历代人物传记资料库 CBDB 341915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FT4pzO0Q9EUkTcs1I5VjqH
          claim_id: c_gXKov4yM8tiYYkgi5yMiJ1
          source_id: s_vvJ8NEdbazT8Hc9UKGzTjQ
          stance: supports
          locator: CBDB:341915
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

# 王廷獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷獻 | accepted |
| bio.summary | 王廷獻，清人物。明清進士進士，籍贯海寧州，入仕進士，曾任戶部主事、鄉試考官。（中国历代人物传记资料库 CBDB 341915） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷獻（CBDB 341915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341915&o=json)
