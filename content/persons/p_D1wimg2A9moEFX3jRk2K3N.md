---
schema: wang-person/v1
id: p_D1wimg2A9moEFX3jRk2K3N
status: active
merged_into: null
display_name: 王守綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z1wW213biEv8MJkHWyVP3u
        subject_person_id: p_D1wimg2A9moEFX3jRk2K3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6EztE7DmVLH6i71gQffymS
          claim_id: c_z1wW213biEv8MJkHWyVP3u
          source_id: s_Mb77CjJ2F8q5TYHwc1w9xG
          stance: supports
          locator: CBDB:637072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637072）
          source: &a1
            id: s_Mb77CjJ2F8q5TYHwc1w9xG
            source_type: api_record
            title: 中国历代人物传记资料库：王守綸（CBDB 637072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637072&o=json
            external_identifier: CBDB:637072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RU6HjPFAnjuSFHT7wxkUnB
        subject_person_id: p_D1wimg2A9moEFX3jRk2K3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守綸，清人物。籍贯易州直隸州直轄地方，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uVIUk5SSqMfvNryz3EBNAv
          claim_id: c_RU6HjPFAnjuSFHT7wxkUnB
          source_id: s_Mb77CjJ2F8q5TYHwc1w9xG
          stance: supports
          locator: CBDB:637072
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

# 王守綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守綸 | accepted |
| bio.summary | 王守綸，清人物。籍贯易州直隸州直轄地方，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守綸（CBDB 637072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637072&o=json)
