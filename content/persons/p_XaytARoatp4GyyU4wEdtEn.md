---
schema: wang-person/v1
id: p_XaytARoatp4GyyU4wEdtEn
status: active
merged_into: null
display_name: 王鑑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BerLe9N1vzQ2PPcn3rA1yK
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tMEc5dABNv1AdLEChoqEuh
          claim_id: c_BerLe9N1vzQ2PPcn3rA1yK
          source_id: s_fbw3VK1Qeo2FHNjFcLGBsS
          stance: supports
          locator: CBDB:281042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281042）
          source: &a1
            id: s_fbw3VK1Qeo2FHNjFcLGBsS
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 281042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281042&o=json
            external_identifier: CBDB:281042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ffLmN5fCZhApyzeAAGgaSB
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hU1sGjLE9C8EcE0z-rxtvq
          claim_id: c_ffLmN5fCZhApyzeAAGgaSB
          source_id: s_fbw3VK1Qeo2FHNjFcLGBsS
          stance: supports
          locator: CBDB:281042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fCXx5WHWrZvASxbVU390Aq
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qf-Cw1X-zF0F7_FHWOvZdz
          claim_id: c_fCXx5WHWrZvASxbVU390Aq
          source_id: s_fbw3VK1Qeo2FHNjFcLGBsS
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z4K3ehvdbQWDKCv3VLhZDK
        status: active
        display_name: 王可學
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_z4K3ehvdbQWDKCv3VLhZDK | 王可學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 281042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281042&o=json)
