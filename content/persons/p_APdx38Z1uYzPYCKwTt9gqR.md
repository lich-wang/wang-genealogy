---
schema: wang-person/v1
id: p_APdx38Z1uYzPYCKwTt9gqR
status: active
merged_into: null
display_name: 王所相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9avq7XdG1MPTgHELUctQfq
        subject_person_id: p_APdx38Z1uYzPYCKwTt9gqR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kUiJxmTDzvtL7G18W85C2Y
          claim_id: c_9avq7XdG1MPTgHELUctQfq
          source_id: s_RaEsXrG9YGMrMGL79tnVtV
          stance: supports
          locator: CBDB:638061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638061）
          source: &a1
            id: s_RaEsXrG9YGMrMGL79tnVtV
            source_type: api_record
            title: 中国历代人物传记资料库：王所相（CBDB 638061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638061&o=json
            external_identifier: CBDB:638061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TPPCqYXwexacKu998fFwGs
        subject_person_id: p_APdx38Z1uYzPYCKwTt9gqR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所相，清人物。籍贯聊城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YVQy3mo78qIilDWzacBsdz
          claim_id: c_TPPCqYXwexacKu998fFwGs
          source_id: s_RaEsXrG9YGMrMGL79tnVtV
          stance: supports
          locator: CBDB:638061
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

# 王所相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王所相 | accepted |
| bio.summary | 王所相，清人物。籍贯聊城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王所相（CBDB 638061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638061&o=json)
