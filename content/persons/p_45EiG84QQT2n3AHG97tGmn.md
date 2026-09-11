---
schema: wang-person/v1
id: p_45EiG84QQT2n3AHG97tGmn
status: active
merged_into: null
display_name: 王良
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AP234TQc29F1dAf6WgE4GP
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AeVovNFJYCx37jQM2oAGTS
          claim_id: c_AP234TQc29F1dAf6WgE4GP
          source_id: s_es3vxojSiF6C7MrRXppwJ2
          stance: supports
          locator: CBDB:292231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292231）
          source: &a1
            id: s_es3vxojSiF6C7MrRXppwJ2
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 292231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292231&o=json
            external_identifier: CBDB:292231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UrfMiYpXFqdJLwy5b29hVW
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292231）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mxD_3FNRIQ2yZW9MOrapPa
          claim_id: c_UrfMiYpXFqdJLwy5b29hVW
          source_id: s_es3vxojSiF6C7MrRXppwJ2
          stance: supports
          locator: CBDB:292231
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_c6NDpK1zptPjGZsfpgKyVW
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJ91EnqP8F2-2hqnfGJJZu
          claim_id: c_c6NDpK1zptPjGZsfpgKyVW
          source_id: s_es3vxojSiF6C7MrRXppwJ2
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HE5e4JMgdzoDwzM6FykZUf
        status: active
        display_name: 王聮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | 王良，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292231） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HE5e4JMgdzoDwzM6FykZUf | 王聮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 292231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292231&o=json)
