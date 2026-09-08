---
schema: wang-person/v1
id: p_UaNg1wksvazhfK4rTdvraK
status: active
merged_into: null
display_name: 王文
cbdb_id: 21992
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UBSUKJ8A3Q22mbkptXGZPM
        subject_person_id: p_UaNg1wksvazhfK4rTdvraK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，宋人物。CBDB 记录其籍贯记录为穀城，身份包括義門，曾任右朝奉郎、太子少傅。中国历代人物传记资料库（CBDB）以人物编号 21992 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6dqvWj8CRuHTXNTtFv7AjB
          claim_id: c_UBSUKJ8A3Q22mbkptXGZPM
          source_id: s_o2Ns99Rj2oBxz39K8qiTbJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_o2Ns99Rj2oBxz39K8qiTbJ
            source_type: api_record
            title: 维基数据：王文（Q45401645）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401645
            external_identifier: Q45401645
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_3RY2aca0sPXptT1aElDbQe
          claim_id: c_UBSUKJ8A3Q22mbkptXGZPM
          source_id: s_LKRgQGQseaZnwczbiBNqeA
          stance: supports
          locator: CBDB:21992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LKRgQGQseaZnwczbiBNqeA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文（21992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21992&o=json
            external_identifier: CBDB:21992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.375Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZcCoaD8YkfrCAPWBsRRzxC
        subject_person_id: p_UaNg1wksvazhfK4rTdvraK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TGYLQL9L6tVs6NxbjSwNMV
          claim_id: c_ZcCoaD8YkfrCAPWBsRRzxC
          source_id: s_LKRgQGQseaZnwczbiBNqeA
          stance: supports
          locator: Q45401645
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_aTampurJgHfPKCzN3XTuWp
          claim_id: c_ZcCoaD8YkfrCAPWBsRRzxC
          source_id: s_o2Ns99Rj2oBxz39K8qiTbJ
          stance: supports
          locator: Q45401645
          quotation: null
          interpretation_note: null
          source:
            id: s_o2Ns99Rj2oBxz39K8qiTbJ
            source_type: api_record
            title: 维基数据：王文（Q45401645）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401645
            external_identifier: Q45401645
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PU6ebLcXKmi9EYytxk36xi
        subject_person_id: p_strJmPSamv7xYKXXKW9MTr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UaNg1wksvazhfK4rTdvraK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BJi3PQMdBZUc9zwFAvx9w
          claim_id: c_PU6ebLcXKmi9EYytxk36xi
          source_id: s_h9RCV9DAxDCQUpChypQZfg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_h9RCV9DAxDCQUpChypQZfg
            source_type: api_record
            title: 维基数据：王迁（Q45401644）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401644
            external_identifier: Q45401644
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_q9CvjHU6RQ2hL5s1ts2qwa
          claim_id: c_PU6ebLcXKmi9EYytxk36xi
          source_id: s_o2Ns99Rj2oBxz39K8qiTbJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_strJmPSamv7xYKXXKW9MTr
        status: active
        display_name: 王迁
        merged_into_person_id: null
  children:
    - claim:
        id: c_YAogQddKu64uiAMoWgVFTP
        subject_person_id: p_UaNg1wksvazhfK4rTdvraK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dugn9Y5GC1ysVBtTRs2WLM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DhjbdrekJK1Sw6xgaaTKSb
          claim_id: c_YAogQddKu64uiAMoWgVFTP
          source_id: s_QvBFGAPqTXthL9LjsDRAhW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QvBFGAPqTXthL9LjsDRAhW
            source_type: api_record
            title: 维基数据：王纲（Q45401648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401648
            external_identifier: Q45401648
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_1LHz9QyNbd2Ti1b6YVsPh5
          claim_id: c_YAogQddKu64uiAMoWgVFTP
          source_id: s_o2Ns99Rj2oBxz39K8qiTbJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_bG5PVnD6fpN8FsdXNhfU3u
          claim_id: c_YAogQddKu64uiAMoWgVFTP
          source_id: s_LKRgQGQseaZnwczbiBNqeA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_dugn9Y5GC1ysVBtTRs2WLM
        status: active
        display_name: 王纲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NKZoNot1iMFkP12AgC2pVg
        subject_person_id: p_C1tV5ZY5YvAKhLKZaKXppK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UaNg1wksvazhfK4rTdvraK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76CWemvsjq5mEjXnbiEr9L
          claim_id: c_NKZoNot1iMFkP12AgC2pVg
          source_id: s_UZDEw7ijuhYV7Gx4Qzd6Zk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UZDEw7ijuhYV7Gx4Qzd6Zk
            source_type: api_record
            title: 维基数据：黄氏（Q45431261）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431261
            external_identifier: Q45431261
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_y9vS68USmNiRAqHbboshpH
          claim_id: c_NKZoNot1iMFkP12AgC2pVg
          source_id: s_o2Ns99Rj2oBxz39K8qiTbJ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_GLTjvCHJXkcnHh7snMhPKg
          claim_id: c_NKZoNot1iMFkP12AgC2pVg
          source_id: s_LKRgQGQseaZnwczbiBNqeA
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_C1tV5ZY5YvAKhLKZaKXppK
        status: active
        display_name: 黄氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文，宋人物。CBDB 记录其籍贯记录为穀城，身份包括義門，曾任右朝奉郎、太子少傅。中国历代人物传记资料库（CBDB）以人物编号 21992 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_strJmPSamv7xYKXXKW9MTr | 王迁 | accepted |
| children | p_dugn9Y5GC1ysVBtTRs2WLM | 王纲 | accepted |
| spouses | p_C1tV5ZY5YvAKhLKZaKXppK | 黄氏 | accepted |

## 外部来源

- [维基数据：黄氏（Q45431261）](https://www.wikidata.org/wiki/Q45431261)
- [维基数据：王纲（Q45401648）](https://www.wikidata.org/wiki/Q45401648)
- [维基数据：王迁（Q45401644）](https://www.wikidata.org/wiki/Q45401644)
- [维基数据：王文（Q45401645）](https://www.wikidata.org/wiki/Q45401645)
- [CBDB 中国历代人物传记资料库：王文（21992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21992&o=json)
