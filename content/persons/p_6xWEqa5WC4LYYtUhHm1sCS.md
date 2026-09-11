---
schema: wang-person/v1
id: p_6xWEqa5WC4LYYtUhHm1sCS
status: active
merged_into: null
display_name: 王啟鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4k53Twx7evgTgmaFnsEvgE
        subject_person_id: p_6xWEqa5WC4LYYtUhHm1sCS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9M7KQ3icBrGb59nu9jBFTK
          claim_id: c_4k53Twx7evgTgmaFnsEvgE
          source_id: s_2HPgCAmw9BjZU3j2qXLC3Q
          stance: supports
          locator: CBDB:636569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636569）
          source: &a1
            id: s_2HPgCAmw9BjZU3j2qXLC3Q
            source_type: api_record
            title: 中国历代人物传记资料库：王啟鳴（CBDB 636569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636569&o=json
            external_identifier: CBDB:636569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_22oVUYv8hgHmyChTgqf7L6
        subject_person_id: p_6xWEqa5WC4LYYtUhHm1sCS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王啟鳴，清人物。籍贯江西省，入仕科舉制舉: 武舉科，曾任中軍守備。（中国历代人物传记资料库 CBDB 636569）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_thu3JcGSUbNesXNYPQMA31
          claim_id: c_22oVUYv8hgHmyChTgqf7L6
          source_id: s_2HPgCAmw9BjZU3j2qXLC3Q
          stance: supports
          locator: CBDB:636569
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

# 王啟鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟鳴 | accepted |
| bio.summary | 王啟鳴，清人物。籍贯江西省，入仕科舉制舉: 武舉科，曾任中軍守備。（中国历代人物传记资料库 CBDB 636569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟鳴（CBDB 636569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636569&o=json)
