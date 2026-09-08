---
schema: wang-person/v1
id: p_4i3jHPAhfhAhxjuPATCoyQ
status: active
merged_into: null
display_name: 李珏
cbdb_id: 5236
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hm8SMqqOACQu1ISQBuUhVR
        subject_person_id: p_4i3jHPAhfhAhxjuPATCoyQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李珏，宋人物。CBDB 记录其籍贯记录为山陽，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 5236 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NUb2oz4G7DiHZ9g2EgtA6s
          claim_id: c_hm8SMqqOACQu1ISQBuUhVR
          source_id: s_oVAzmPBkyJYTr557Ng41iJ
          stance: supports
          locator: CBDB:5236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oVAzmPBkyJYTr557Ng41iJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李珏（5236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5236&o=json
            external_identifier: CBDB:5236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:17.740Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tfzz9qqCmZxBW41a6vA2LN
        subject_person_id: p_4i3jHPAhfhAhxjuPATCoyQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李珏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4RFam7n9uY5MDBRvmCsP6t
          claim_id: c_tfzz9qqCmZxBW41a6vA2LN
          source_id: s_LJAjcAHudFkvGGAcFvPYDB
          stance: supports
          locator: Q45364417
          quotation: null
          interpretation_note: null
          source:
            id: s_LJAjcAHudFkvGGAcFvPYDB
            source_type: api_record
            title: 维基数据：李珏（Q45364417）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364417
            external_identifier: Q45364417
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_LJGy8kd1DGA5BeKarocEML
          claim_id: c_tfzz9qqCmZxBW41a6vA2LN
          source_id: s_oVAzmPBkyJYTr557Ng41iJ
          stance: supports
          locator: Q45364417
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_y2iwqLVEnozptMzQuaquDZ
        subject_person_id: p_4i3jHPAhfhAhxjuPATCoyQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_q3ZkDJwcYneEdHqF1jDPv8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_65UvPybWyQCoSdJSngP5yi
          claim_id: c_y2iwqLVEnozptMzQuaquDZ
          source_id: s_5tQFeQ9M1zdY2LF4Jo7pY2
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5tQFeQ9M1zdY2LF4Jo7pY2
            source_type: api_record
            title: 维基数据：王洋（Q16077398）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077398
            external_identifier: Q16077398
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:56.804Z
            metadata_json: null
        - id: cs_U658HjnV47V5pTUEWNfQkq
          claim_id: c_y2iwqLVEnozptMzQuaquDZ
          source_id: s_LJAjcAHudFkvGGAcFvPYDB
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_LJAjcAHudFkvGGAcFvPYDB
            source_type: api_record
            title: 维基数据：李珏（Q45364417）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364417
            external_identifier: Q45364417
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_sFGLLs3x5BQ626X4n4eZ4q
          claim_id: c_y2iwqLVEnozptMzQuaquDZ
          source_id: s_929j9mT6VcY5z94MFbSCY3
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_929j9mT6VcY5z94MFbSCY3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王洋（15443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15443&o=json
            external_identifier: CBDB:15443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:10.849Z
            metadata_json: null
      object_person:
        id: p_q3ZkDJwcYneEdHqF1jDPv8
        status: active
        display_name: 王洋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李珏，宋人物。CBDB 记录其籍贯记录为山陽，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 5236 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 李珏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_q3ZkDJwcYneEdHqF1jDPv8 | 王洋 | accepted |

## 外部来源

- [维基数据：李珏（Q45364417）](https://www.wikidata.org/wiki/Q45364417)
- [维基数据：王洋（Q16077398）](https://www.wikidata.org/wiki/Q16077398)
- [CBDB 中国历代人物传记资料库：李珏（5236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5236&o=json)
- [CBDB 中国历代人物传记资料库：王洋（15443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15443&o=json)
