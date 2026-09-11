---
schema: wang-person/v1
id: p_Y7apRdjyWrGwFP1N7Cpm6d
status: active
merged_into: null
display_name: 王寶德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o4g2LnnTcgPQzUEKF7EVSx
        subject_person_id: p_Y7apRdjyWrGwFP1N7Cpm6d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HTRoEkVQdE37tpfDNoEd4s
          claim_id: c_o4g2LnnTcgPQzUEKF7EVSx
          source_id: s_3BiManJoHz5hyccNKyyaA4
          stance: supports
          locator: CBDB:637259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637259）
          source: &a1
            id: s_3BiManJoHz5hyccNKyyaA4
            source_type: api_record
            title: 中国历代人物传记资料库：王寶德（CBDB 637259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637259&o=json
            external_identifier: CBDB:637259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kdGKYaaSDLB1SbiY9UEYaf
        subject_person_id: p_Y7apRdjyWrGwFP1N7Cpm6d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王寶德，清人物。籍贯開封府，入仕學校: 生員(庠生)，曾任復設訓導。（中国历代人物传记资料库 CBDB 637259）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Q1PC61nPcaEkOnrP5Qzz6
          claim_id: c_kdGKYaaSDLB1SbiY9UEYaf
          source_id: s_3BiManJoHz5hyccNKyyaA4
          stance: supports
          locator: CBDB:637259
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

# 王寶德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶德 | accepted |
| bio.summary | 王寶德，清人物。籍贯開封府，入仕學校: 生員(庠生)，曾任復設訓導。（中国历代人物传记资料库 CBDB 637259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶德（CBDB 637259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637259&o=json)
