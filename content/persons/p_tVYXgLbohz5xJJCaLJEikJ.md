---
schema: wang-person/v1
id: p_tVYXgLbohz5xJJCaLJEikJ
status: active
merged_into: null
display_name: 王光榜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8jeSQREPsFC4V3QVuKWjtR
        subject_person_id: p_tVYXgLbohz5xJJCaLJEikJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光榜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDKCKTxefoU7snQHErM6qT
          claim_id: c_8jeSQREPsFC4V3QVuKWjtR
          source_id: s_LS4yHUtjBaFoGtqzQRbEvN
          stance: supports
          locator: CBDB:636254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636254）
          source: &a1
            id: s_LS4yHUtjBaFoGtqzQRbEvN
            source_type: api_record
            title: 中国历代人物传记资料库：王光榜（CBDB 636254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636254&o=json
            external_identifier: CBDB:636254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rd7S3aHH7MwLJ6nFMtiaRX
        subject_person_id: p_tVYXgLbohz5xJJCaLJEikJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光榜，清人物。籍贯寧鄉，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WpdIQj_NcGiQvcMvMb-f7N
          claim_id: c_Rd7S3aHH7MwLJ6nFMtiaRX
          source_id: s_LS4yHUtjBaFoGtqzQRbEvN
          stance: supports
          locator: CBDB:636254
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

# 王光榜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光榜 | accepted |
| bio.summary | 王光榜，清人物。籍贯寧鄉，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636254） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光榜（CBDB 636254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636254&o=json)
