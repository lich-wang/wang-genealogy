---
schema: wang-person/v1
id: p_PzBm181h9pU51J4CdXkNRD
status: active
merged_into: null
display_name: 王啟茂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G171Lw1xwhF7X5qqS7Y9j2
        subject_person_id: p_PzBm181h9pU51J4CdXkNRD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JzNoWvErAofEXyN1gHGTuh
          claim_id: c_G171Lw1xwhF7X5qqS7Y9j2
          source_id: s_H96iMm1zNF96p53BZjBrYb
          stance: supports
          locator: CBDB:575022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575022）
          source: &a1
            id: s_H96iMm1zNF96p53BZjBrYb
            source_type: api_record
            title: 中国历代人物传记资料库：王啟茂（CBDB 575022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575022&o=json
            external_identifier: CBDB:575022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6B1yvNkN1rQMdhf8e7rvCP
        subject_person_id: p_PzBm181h9pU51J4CdXkNRD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟茂，明人物。籍贯石首，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 575022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RpR7LILUzMlIzXk3ZgtSjX
          claim_id: c_6B1yvNkN1rQMdhf8e7rvCP
          source_id: s_H96iMm1zNF96p53BZjBrYb
          stance: supports
          locator: CBDB:575022
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

# 王啟茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟茂 | accepted |
| bio.summary | 王啟茂，明人物。籍贯石首，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 575022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟茂（CBDB 575022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575022&o=json)
