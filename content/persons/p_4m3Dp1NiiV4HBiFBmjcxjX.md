---
schema: wang-person/v1
id: p_4m3Dp1NiiV4HBiFBmjcxjX
status: active
merged_into: null
display_name: 王欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8EGocU3gQMoGSBpgC7eE4B
        subject_person_id: p_4m3Dp1NiiV4HBiFBmjcxjX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_be6pXoQqVHMNEF8w75iE9t
          claim_id: c_8EGocU3gQMoGSBpgC7eE4B
          source_id: s_pWXqktSZQNF6ABzWH5MgGv
          stance: supports
          locator: CBDB:343836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343836）
          source: &a1
            id: s_pWXqktSZQNF6ABzWH5MgGv
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 343836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343836&o=json
            external_identifier: CBDB:343836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fgkgyHPM5ujyfYQm2z7gvD
        subject_person_id: p_4m3Dp1NiiV4HBiFBmjcxjX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。明清進士進士，籍贯巴縣，入仕進士。（中国历代人物传记资料库 CBDB 343836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KyRIp4Duz1QghuDkF7m9xv
          claim_id: c_fgkgyHPM5ujyfYQm2z7gvD
          source_id: s_pWXqktSZQNF6ABzWH5MgGv
          stance: supports
          locator: CBDB:343836
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

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。明清進士進士，籍贯巴縣，入仕進士。（中国历代人物传记资料库 CBDB 343836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 343836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343836&o=json)
