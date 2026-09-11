---
schema: wang-person/v1
id: p_Tg3DB6ZDQDSPVzRuN5GX39
status: active
merged_into: null
display_name: 王寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fPBE6XPEz8MGgmmChFAeXc
        subject_person_id: p_Tg3DB6ZDQDSPVzRuN5GX39
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PBVU1NfxEA1F7zfSxVtQ1u
          claim_id: c_fPBE6XPEz8MGgmmChFAeXc
          source_id: s_b424A2HULJur83huwu8BJX
          stance: supports
          locator: CBDB:573875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573875）
          source: &a1
            id: s_b424A2HULJur83huwu8BJX
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 573875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573875&o=json
            external_identifier: CBDB:573875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XPcanKPYg2ncKyArtT3DAE
        subject_person_id: p_Tg3DB6ZDQDSPVzRuN5GX39
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王寧，清人物。籍贯漢陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 573875）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zOxGfFgK5jeMnkHeXvWr_I
          claim_id: c_XPcanKPYg2ncKyArtT3DAE
          source_id: s_b424A2HULJur83huwu8BJX
          stance: supports
          locator: CBDB:573875
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

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，清人物。籍贯漢陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 573875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 573875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573875&o=json)
