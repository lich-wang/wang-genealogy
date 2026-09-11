---
schema: wang-person/v1
id: p_TgCvcGVA1Crvyz9hg3VZWC
status: active
merged_into: null
display_name: 王基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DsLnmBHMTViebjRN8nKZQz
        subject_person_id: p_TgCvcGVA1Crvyz9hg3VZWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zrccHQ7t6q21PsGB5g59CS
          claim_id: c_DsLnmBHMTViebjRN8nKZQz
          source_id: s_72RwJjUsxa9kBSRqdE8XFh
          stance: supports
          locator: CBDB:467264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467264）
          source: &a1
            id: s_72RwJjUsxa9kBSRqdE8XFh
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 467264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467264&o=json
            external_identifier: CBDB:467264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_peDWGGEBZGqLmJ6xgTyoBw
        subject_person_id: p_TgCvcGVA1Crvyz9hg3VZWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基，清人物。入仕武舉進士，曾任守備。（中国历代人物传记资料库 CBDB 467264）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9BObQCBf_EW_S1dYWfjU1W
          claim_id: c_peDWGGEBZGqLmJ6xgTyoBw
          source_id: s_72RwJjUsxa9kBSRqdE8XFh
          stance: supports
          locator: CBDB:467264
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

# 王基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王基 | accepted |
| bio.summary | 王基，清人物。入仕武舉進士，曾任守備。（中国历代人物传记资料库 CBDB 467264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王基（CBDB 467264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467264&o=json)
