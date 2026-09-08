---
schema: wang-person/v1
id: p_fGZLZddpCqxVuUdQzBCgQX
status: active
merged_into: null
display_name: 刘彧
cbdb_id: 339540
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W-PcWUBaCnomkJzvCJfB0D
        subject_person_id: p_fGZLZddpCqxVuUdQzBCgQX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘彧，南朝刘宋皇帝。维基数据以独立条目 Q718195 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_v2WZzQGM14Z_OccBmm2N-G
          claim_id: c_W-PcWUBaCnomkJzvCJfB0D
          source_id: s_aog34YV3TSb7fmSqBUNA53
          stance: supports
          locator: Q718195
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_aog34YV3TSb7fmSqBUNA53
            source_type: api_record
            title: 维基数据：刘彧（Q718195）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q718195
            external_identifier: Q718195
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.790Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AE%8B%E6%98%8E%E5%B8%9D
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kyzAtSHnNnBfNFnSTSbcK1
        subject_person_id: p_fGZLZddpCqxVuUdQzBCgQX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘彧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HmpcJ2LvCp3jFKihDtM8pe
          claim_id: c_kyzAtSHnNnBfNFnSTSbcK1
          source_id: s_aog34YV3TSb7fmSqBUNA53
          stance: supports
          locator: Q718195
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_s5PLkJgLEzP4kGu5FHoDkm
          claim_id: c_kyzAtSHnNnBfNFnSTSbcK1
          source_id: s_SEWaXyxga7frQ4y7k7tWyy
          stance: supports
          locator: Q718195
          quotation: null
          interpretation_note: null
          source:
            id: s_SEWaXyxga7frQ4y7k7tWyy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉彧（339540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339540&o=json
            external_identifier: CBDB:339540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:17:52.958Z
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
        id: c_MvjRHS7RsweCfEiV6oL35L
        subject_person_id: p_fGZLZddpCqxVuUdQzBCgQX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_x2YE6srB2gXpaEuTinNRLE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_dtchGvFd1BJZWZA7yV57hf
          claim_id: c_MvjRHS7RsweCfEiV6oL35L
          source_id: s_RG1jATbcHEDjCbB66JdiFa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_RG1jATbcHEDjCbB66JdiFa
            source_type: api_record
            title: 维基数据：王贞风（Q855789）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q855789
            external_identifier: Q855789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:22.564Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%9E%E9%A2%A8
        - id: cs_Gr2yeWzU4ftWVn7dJM5MLV
          claim_id: c_MvjRHS7RsweCfEiV6oL35L
          source_id: s_aog34YV3TSb7fmSqBUNA53
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_aog34YV3TSb7fmSqBUNA53
            source_type: api_record
            title: 维基数据：刘彧（Q718195）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q718195
            external_identifier: Q718195
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.790Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AE%8B%E6%98%8E%E5%B8%9D
      object_person:
        id: p_x2YE6srB2gXpaEuTinNRLE
        status: active
        display_name: 王贞风
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘彧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘彧，南朝刘宋皇帝。维基数据以独立条目 Q718195 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 刘彧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_x2YE6srB2gXpaEuTinNRLE | 王贞风 | accepted |

## 外部来源

- [维基数据：刘彧（Q718195）](https://www.wikidata.org/wiki/Q718195)
- [维基数据：王贞风（Q855789）](https://www.wikidata.org/wiki/Q855789)
- [CBDB 中国历代人物传记资料库：劉彧（339540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339540&o=json)
