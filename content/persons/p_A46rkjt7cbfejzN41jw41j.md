---
schema: wang-person/v1
id: p_A46rkjt7cbfejzN41jw41j
status: active
merged_into: null
display_name: 王奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hx3i87CyaVFm7F7bda2rDR
        subject_person_id: p_A46rkjt7cbfejzN41jw41j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xvygAr9sY9AnqD5kAPyYRV
          claim_id: c_Hx3i87CyaVFm7F7bda2rDR
          source_id: s_N4KsXCPo9kxBvKiCdvhQ1U
          stance: supports
          locator: CBDB:694151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694151）
          source: &a1
            id: s_N4KsXCPo9kxBvKiCdvhQ1U
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 694151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694151&o=json
            external_identifier: CBDB:694151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kNuRjbZf41H2C2MHnCWHoL
        subject_person_id: p_A46rkjt7cbfejzN41jw41j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王奎，清人物。籍贯鄞縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 694151）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ANkIv4c6_IgxHR6ukGjecJ
          claim_id: c_kNuRjbZf41H2C2MHnCWHoL
          source_id: s_N4KsXCPo9kxBvKiCdvhQ1U
          stance: supports
          locator: CBDB:694151
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

# 王奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎 | accepted |
| bio.summary | 王奎，清人物。籍贯鄞縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 694151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奎（CBDB 694151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694151&o=json)
