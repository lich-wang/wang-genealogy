---
schema: wang-person/v1
id: p_mgxHev7zFTwcmkSJE7CaXn
status: active
merged_into: null
display_name: 王良玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M9C6i2QsycM163VeP1j5y2
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C35krcBfMpjLAyg9xmZCui
          claim_id: c_M9C6i2QsycM163VeP1j5y2
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB:10725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10725）
          source: &a1
            id: s_BAjxo671XMFTkByAe6GdPY
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v437Q6UeeffNF1Z91wcJS9
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1290年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VrK6asmt91Ch2oW6knANFx
          claim_id: c_v437Q6UeeffNF1Z91wcJS9
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Fn3kXJ9XCh7YBWscGxDi3k
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1364年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYRGxdQd5HYoLC2yW1NYKi
          claim_id: c_Fn3kXJ9XCh7YBWscGxDi3k
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g9eNvUafPL9oxFCNibx22v
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ChQDYj6fqPhzttjgxSUKSg
          claim_id: c_g9eNvUafPL9oxFCNibx22v
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_K_85h8SymJNKwNmSC4vGlv
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV3xYYvS_EPPIlKZ6Q-et-
          claim_id: c_K_85h8SymJNKwNmSC4vGlv
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: 元人傳記資料索引，18636：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NxhVtsQFEKS3B7HARgTqxM
        status: active
        display_name: 王褘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良玉 | accepted |
| birth.date | 1290年 | accepted |
| death.date | 1364年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NxhVtsQFEKS3B7HARgTqxM | 王褘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
