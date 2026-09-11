---
schema: wang-person/v1
id: p_EZFMizvLL5tKLLa9DMUB1x
status: active
merged_into: null
display_name: 王之藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RPjKPb5FfJ8KHc7aH346M4
        subject_person_id: p_EZFMizvLL5tKLLa9DMUB1x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDUDpm6MACT7LkCz3tPhLF
          claim_id: c_RPjKPb5FfJ8KHc7aH346M4
          source_id: s_HMg3bisqZbXuoxUQFae38p
          stance: supports
          locator: CBDB:490517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490517）
          source: &a1
            id: s_HMg3bisqZbXuoxUQFae38p
            source_type: api_record
            title: 中国历代人物传记资料库：王之藩（CBDB 490517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490517&o=json
            external_identifier: CBDB:490517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dKEYEMB2JiNUqqoHjJsiHi
        subject_person_id: p_EZFMizvLL5tKLLa9DMUB1x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之藩，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任學正。（中国历代人物传记资料库 CBDB 490517）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n_9vdZhCt_9rMcAR2bFj-s
          claim_id: c_dKEYEMB2JiNUqqoHjJsiHi
          source_id: s_HMg3bisqZbXuoxUQFae38p
          stance: supports
          locator: CBDB:490517
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

# 王之藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之藩 | accepted |
| bio.summary | 王之藩，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任學正。（中国历代人物传记资料库 CBDB 490517） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之藩（CBDB 490517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490517&o=json)
