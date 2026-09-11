---
schema: wang-person/v1
id: p_sj73doKoqnfEf9ziejJoVx
status: active
merged_into: null
display_name: 王逢中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U5W8N2dgRzJEYmEPGEmZsQ
        subject_person_id: p_sj73doKoqnfEf9ziejJoVx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jx3xtsRCiw3k5iH9XgFAeS
          claim_id: c_U5W8N2dgRzJEYmEPGEmZsQ
          source_id: s_rMg9FDcJJ4QYKNxkCcVXDv
          stance: supports
          locator: CBDB:548356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（548356）
          source: &a1
            id: s_rMg9FDcJJ4QYKNxkCcVXDv
            source_type: api_record
            title: 中国历代人物传记资料库：王逢中（CBDB 548356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548356&o=json
            external_identifier: CBDB:548356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2y57rc3Kx7g69Mf9DZh3ve
        subject_person_id: p_sj73doKoqnfEf9ziejJoVx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢中，宋人物。籍贯龍溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548356）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GaD2_dtaV1Qass720QwIrY
          claim_id: c_2y57rc3Kx7g69Mf9DZh3ve
          source_id: s_rMg9FDcJJ4QYKNxkCcVXDv
          stance: supports
          locator: CBDB:548356
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

# 王逢中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢中 | accepted |
| bio.summary | 王逢中，宋人物。籍贯龍溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548356） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢中（CBDB 548356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548356&o=json)
