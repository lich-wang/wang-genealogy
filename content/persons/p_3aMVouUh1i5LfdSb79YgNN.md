---
schema: wang-person/v1
id: p_3aMVouUh1i5LfdSb79YgNN
status: active
merged_into: null
display_name: 王元命
cbdb_id: 206711
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pRvTM32iXqWGWt8APHrKmc
        subject_person_id: p_3aMVouUh1i5LfdSb79YgNN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元命（生于1550年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206711 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_X_AOBlbvY3kjQG0s5VGiki
          claim_id: c_pRvTM32iXqWGWt8APHrKmc
          source_id: s_rjYyoGSwYrY7N6uZFWxUMN
          stance: supports
          locator: CBDB:206711
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_rjYyoGSwYrY7N6uZFWxUMN
            source_type: api_record
            title: 中国历代人物传记资料库：王元命（CBDB 206711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206711&o=json
            external_identifier: CBDB:206711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TeGfqU9gZr2pvLJ6w7cUcY
        subject_person_id: p_3aMVouUh1i5LfdSb79YgNN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1550年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1550-01-01
            latest: 1550-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gQ1XMrTNgaQ56T5ddvzvyq
          claim_id: c_TeGfqU9gZr2pvLJ6w7cUcY
          source_id: s_rjYyoGSwYrY7N6uZFWxUMN
          stance: supports
          locator: CBDB:206711
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1550
          source:
            id: s_rjYyoGSwYrY7N6uZFWxUMN
            source_type: api_record
            title: 中国历代人物传记资料库：王元命（CBDB 206711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206711&o=json
            external_identifier: CBDB:206711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fp5JzHgC25qGzTkzzK7aiF
        subject_person_id: p_3aMVouUh1i5LfdSb79YgNN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jLd4CR93L13t6XtL26QdkT
          claim_id: c_fp5JzHgC25qGzTkzzK7aiF
          source_id: s_rjYyoGSwYrY7N6uZFWxUMN
          stance: supports
          locator: CBDB:206711
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1550
          source:
            id: s_rjYyoGSwYrY7N6uZFWxUMN
            source_type: api_record
            title: 中国历代人物传记资料库：王元命（CBDB 206711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206711&o=json
            external_identifier: CBDB:206711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_I8K9PX0xwYG2jI9Ns_Cgcz
        subject_person_id: p_9V6XR4PXXzFLjMUWdCy8vq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3aMVouUh1i5LfdSb79YgNN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l3KDklmgtsumq5hZlLEbCj
          claim_id: c_I8K9PX0xwYG2jI9Ns_Cgcz
          source_id: s_LJm21g3fNjRbobPA71d22T
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LJm21g3fNjRbobPA71d22T
            source_type: api_record
            title: 中国历代人物传记资料库：王顏（CBDB 221921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221921&o=json
            external_identifier: CBDB:221921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9V6XR4PXXzFLjMUWdCy8vq
        status: active
        display_name: 王顏
        merged_into_person_id: null
    - claim:
        id: c_SQlN58-1RnYB_w_N_NQGb1
        subject_person_id: p_DtyfmfRP6LSaW7ht1gFmZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3aMVouUh1i5LfdSb79YgNN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akoYIGsrXPEMKo3g3EMshJ
          claim_id: c_SQlN58-1RnYB_w_N_NQGb1
          source_id: s_nHEthMDmUKGAN5FThRjNAE
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nHEthMDmUKGAN5FThRjNAE
            source_type: api_record
            title: 中国历代人物传记资料库：王仲實（CBDB 221922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221922&o=json
            external_identifier: CBDB:221922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DtyfmfRP6LSaW7ht1gFmZP
        status: active
        display_name: 王仲實
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王元命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元命（生于1550年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206711 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1550年 | accepted |
| name.primary | 王元命 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_9V6XR4PXXzFLjMUWdCy8vq | 王顏 | accepted |
| ancestors | p_DtyfmfRP6LSaW7ht1gFmZP | 王仲實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王顏（CBDB 221921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221921&o=json)
- [中国历代人物传记资料库：王元命（CBDB 206711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206711&o=json)
- [中国历代人物传记资料库：王仲實（CBDB 221922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221922&o=json)
