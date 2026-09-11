---
schema: wang-person/v1
id: p_EPeWy4iu8LQuRmhnGjhnhV
status: active
merged_into: null
display_name: 王如
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uxRLqXP6TVNcAUw4czc3Sb
        subject_person_id: p_EPeWy4iu8LQuRmhnGjhnhV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gdJp8UmM4uLXSujt7ELWN7
          claim_id: c_uxRLqXP6TVNcAUw4czc3Sb
          source_id: s_QwdCH1frV9DNK2T63d1CLC
          stance: supports
          locator: CBDB:636964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636964）
          source: &a1
            id: s_QwdCH1frV9DNK2T63d1CLC
            source_type: api_record
            title: 中国历代人物传记资料库：王如（CBDB 636964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636964&o=json
            external_identifier: CBDB:636964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ug6Q1sMyz4W2inDFUiF93v
        subject_person_id: p_EPeWy4iu8LQuRmhnGjhnhV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王如，清人物。籍贯奉天府，入仕學校: 生員(庠生)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636964）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bgg_wkdqXqTjd2QurNMmUX
          claim_id: c_ug6Q1sMyz4W2inDFUiF93v
          source_id: s_QwdCH1frV9DNK2T63d1CLC
          stance: supports
          locator: CBDB:636964
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

# 王如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如 | accepted |
| bio.summary | 王如，清人物。籍贯奉天府，入仕學校: 生員(庠生)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如（CBDB 636964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636964&o=json)
