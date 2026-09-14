---
schema: wang-person/v1
id: p_f8PetQxctoF7VjZ8k12xc4
status: active
merged_into: null
display_name: 王大才
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JwBZG7JNkuLUYycYrTp9oG
        subject_person_id: p_f8PetQxctoF7VjZ8k12xc4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZjntbiHDqQD7KPEPHMe3WA
          claim_id: c_JwBZG7JNkuLUYycYrTp9oG
          source_id: s_SxZ3QAg2qLzABYVJE82Kw5
          stance: supports
          locator: CBDB:307132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307132）
          source: &a1
            id: s_SxZ3QAg2qLzABYVJE82Kw5
            source_type: api_record
            title: 中国历代人物传记资料库：王大才（CBDB 307132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307132&o=json
            external_identifier: CBDB:307132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JN2ALX2cqGmLaDmGkbDz11
        subject_person_id: p_f8PetQxctoF7VjZ8k12xc4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才，明人物。嘉靖二十三年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 307132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Myg1e_ZLH4hCJJ_YwB-zDa
          claim_id: c_JN2ALX2cqGmLaDmGkbDz11
          source_id: s_SxZ3QAg2qLzABYVJE82Kw5
          stance: supports
          locator: CBDB:307132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RX9mtgYrTox8l43RKPyMJS
        subject_person_id: p_f8PetQxctoF7VjZ8k12xc4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uFvic6UWuSCgYbCRug2QVP
          claim_id: c_RX9mtgYrTox8l43RKPyMJS
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5eKwFEmCQjg83YXVcQXfxy
            source_type: api_record
            title: 中国历代人物传记资料库：王順德（CBDB 203599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203599&o=json
            external_identifier: CBDB:203599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_53ADyQPeHfyWpAQcTUrMfN
        status: active
        display_name: 王順德
        merged_into_person_id: null
    - claim:
        id: c_eg7uQesTSOdOGN8P3UqDyD
        subject_person_id: p_f8PetQxctoF7VjZ8k12xc4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L2GhB3Gkj5vM3W1SbrCdwM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3p9nbl0V9kRyk2rWt9gBTr
          claim_id: c_eg7uQesTSOdOGN8P3UqDyD
          source_id: s_YFyxk8JFARg231IUJMvHPs
          stance: supports
          locator: CBDB：兄弟 王順德（203599）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王順賢 与 王順德 为同胞（CBDB 记「弟」），王順德 之父／母即 王順賢 之父／母。
          source:
            id: s_YFyxk8JFARg231IUJMvHPs
            source_type: api_record
            title: 中国历代人物传记资料库：王順賢（CBDB 307136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307136&o=json
            external_identifier: CBDB:307136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L2GhB3Gkj5vM3W1SbrCdwM
        status: active
        display_name: 王順賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大才 | accepted |
| bio.summary | 王大才，明人物。嘉靖二十三年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 307132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_53ADyQPeHfyWpAQcTUrMfN | 王順德 | accepted |
| children | p_L2GhB3Gkj5vM3W1SbrCdwM | 王順賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大才（CBDB 307132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307132&o=json)
- [中国历代人物传记资料库：王順德（CBDB 203599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203599&o=json)
- [中国历代人物传记资料库：王順賢（CBDB 307136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307136&o=json)
