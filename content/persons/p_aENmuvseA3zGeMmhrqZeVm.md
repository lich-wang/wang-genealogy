---
schema: wang-person/v1
id: p_aENmuvseA3zGeMmhrqZeVm
status: active
merged_into: null
display_name: 王應熊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nxz1CJHL7Hy8TFahmNNA9X
        subject_person_id: p_aENmuvseA3zGeMmhrqZeVm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vN7tGgRb7g9sDJiCaPQU9H
          claim_id: c_Nxz1CJHL7Hy8TFahmNNA9X
          source_id: s_NDmnoXwL1hrf91eb7SoXPg
          stance: supports
          locator: CBDB:126849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126849）
          source: &a1
            id: s_NDmnoXwL1hrf91eb7SoXPg
            source_type: api_record
            title: 中国历代人物传记资料库：王應熊（CBDB 126849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126849&o=json
            external_identifier: CBDB:126849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AejbSon5cCxAdZTssN16tK
        subject_person_id: p_aENmuvseA3zGeMmhrqZeVm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應熊，明人物。籍贯巴縣，身份为博學之人。（中国历代人物传记资料库 CBDB 126849）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1nGZykJUDbh_0k8hX9iLjP
          claim_id: c_AejbSon5cCxAdZTssN16tK
          source_id: s_NDmnoXwL1hrf91eb7SoXPg
          stance: supports
          locator: CBDB:126849
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

# 王應熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應熊 | accepted |
| bio.summary | 王應熊，明人物。籍贯巴縣，身份为博學之人。（中国历代人物传记资料库 CBDB 126849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應熊（CBDB 126849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126849&o=json)
