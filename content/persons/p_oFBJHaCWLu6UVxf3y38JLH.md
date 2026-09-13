---
schema: wang-person/v1
id: p_oFBJHaCWLu6UVxf3y38JLH
status: active
merged_into: null
display_name: 徐安吉
cbdb_id: 69770
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AzwVy5RJrV3UmyBvJfVZD6
        subject_person_id: p_oFBJHaCWLu6UVxf3y38JLH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐安吉，史料所见人物。本项目依据《徐安吉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ob5-CVc6OZy2OASi-r_ilK
          claim_id: c_AzwVy5RJrV3UmyBvJfVZD6
          source_id: s_wiTzWZoDyPv5i7aun82ECg
          stance: supports
          locator: Q45680985
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wiTzWZoDyPv5i7aun82ECg
            source_type: api_record
            title: 维基数据：徐安吉（Q45680985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45680985
            external_identifier: Q45680985
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:21.813Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dgPU9eq68nwa57zp7jaHWc
        subject_person_id: p_oFBJHaCWLu6UVxf3y38JLH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐安吉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gdAKFnZaakDGR2ShdEDFqc
          claim_id: c_dgPU9eq68nwa57zp7jaHWc
          source_id: s_wiTzWZoDyPv5i7aun82ECg
          stance: supports
          locator: Q45680985
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_rmhVJmAZpH9d6GRBDNL8d2
          claim_id: c_dgPU9eq68nwa57zp7jaHWc
          source_id: s_gvNGjX5LdHBtLNU3jg9H5n
          stance: supports
          locator: Q45680985
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_gvNGjX5LdHBtLNU3jg9H5n
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：徐安吉（69770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69770&o=json
            external_identifier: CBDB:69770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:21.975Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_V4ptnkH1JGb4cDAsd53d4m
        subject_person_id: p_L4EGussSp1S78E2cg4bFb8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oFBJHaCWLu6UVxf3y38JLH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hd5P15LVhLWHdhbwtKH7vF
          claim_id: c_V4ptnkH1JGb4cDAsd53d4m
          source_id: s_p2w83YiUhc75fnLrtBGGZS
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_p2w83YiUhc75fnLrtBGGZS
            source_type: api_record
            title: 维基数据：王鼎起（Q45681016）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45681016
            external_identifier: Q45681016
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
        - id: cs_8KAgSEhE9D12sPhLbBEhbx
          claim_id: c_V4ptnkH1JGb4cDAsd53d4m
          source_id: s_wiTzWZoDyPv5i7aun82ECg
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Jr2yAt4RA7LRjw13TLWPxj
          claim_id: c_V4ptnkH1JGb4cDAsd53d4m
          source_id: s_dC4YTcf3cdC39ujaA33xmY
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_dC4YTcf3cdC39ujaA33xmY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼎起（69771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69771&o=json
            external_identifier: CBDB:69771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:14.582Z
            metadata_json: null
      object_person:
        id: p_L4EGussSp1S78E2cg4bFb8
        status: active
        display_name: 王鼎起
        merged_into_person_id: null
    - claim:
        id: c_3kV-Q7EXdDo760b6B1hpov
        subject_person_id: p_oFBJHaCWLu6UVxf3y38JLH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_L4EGussSp1S78E2cg4bFb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xnRtCQyuEpzJdWSiromTnE
          claim_id: c_3kV-Q7EXdDo760b6B1hpov
          source_id: s_gvNGjX5LdHBtLNU3jg9H5n
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1201, HuWenKai #472：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_L4EGussSp1S78E2cg4bFb8
        status: active
        display_name: 王鼎起
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐安吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐安吉，史料所见人物。本项目依据《徐安吉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 徐安吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_L4EGussSp1S78E2cg4bFb8 | 王鼎起 | accepted |
| spouses | p_L4EGussSp1S78E2cg4bFb8 | 王鼎起 | accepted |

## 外部来源

- [维基数据：王鼎起（Q45681016）](https://www.wikidata.org/wiki/Q45681016)
- [维基数据：徐安吉（Q45680985）](https://www.wikidata.org/wiki/Q45680985)
- [CBDB 中国历代人物传记资料库：王鼎起（69771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69771&o=json)
- [CBDB 中国历代人物传记资料库：徐安吉（69770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69770&o=json)
