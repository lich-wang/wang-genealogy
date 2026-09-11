---
schema: wang-person/v1
id: p_hDrkt9opPdq6APKLpDFQbu
status: active
merged_into: null
display_name: 王業昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MDmKPQ7pKtxN3A57CVnyYr
        subject_person_id: p_hDrkt9opPdq6APKLpDFQbu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B8jDAssrEe4hLC3XcctN8f
          claim_id: c_MDmKPQ7pKtxN3A57CVnyYr
          source_id: s_sNe5iLRsZT4X4ssznaX7Kq
          stance: supports
          locator: CBDB:342681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342681）
          source: &a1
            id: s_sNe5iLRsZT4X4ssznaX7Kq
            source_type: api_record
            title: 中国历代人物传记资料库：王業昌（CBDB 342681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342681&o=json
            external_identifier: CBDB:342681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.014Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D3Sr5K4cKKLZLQAvPpCNC1
        subject_person_id: p_hDrkt9opPdq6APKLpDFQbu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業昌，清人物。明清進士進士，籍贯孟津，入仕進士。（中国历代人物传记资料库 CBDB 342681）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vit1VMuGrK0qQvkpb783Yl
          claim_id: c_D3Sr5K4cKKLZLQAvPpCNC1
          source_id: s_sNe5iLRsZT4X4ssznaX7Kq
          stance: supports
          locator: CBDB:342681
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

# 王業昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業昌 | accepted |
| bio.summary | 王業昌，清人物。明清進士進士，籍贯孟津，入仕進士。（中国历代人物传记资料库 CBDB 342681） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業昌（CBDB 342681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342681&o=json)
