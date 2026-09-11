---
schema: wang-person/v1
id: p_FkG1TtDRuH3sDgFUz4V9Z7
status: active
merged_into: null
display_name: 王氏
cbdb_id: 145252
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iFz2kVhjTxpAxKwjRzjR3G
        subject_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏（卒于810年），王澄女。维基数据以独立条目 Q65803780 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_uU1LLpDQkIuoKGXR6K0ZOY
          claim_id: c_iFz2kVhjTxpAxKwjRzjR3G
          source_id: s_PTsQuwWX6iChr4rf66ZztN
          stance: supports
          locator: Q65803780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_PTsQuwWX6iChr4rf66ZztN
            source_type: api_record
            title: 维基数据：王氏（Q65803780）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803780
            external_identifier: Q65803780
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6KRk1MYuxM8DaiUeKuTUKL
        subject_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 810年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0810-01-01
            latest: 0810-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FjdMXLav2jJcDTpJFULV61
          claim_id: c_6KRk1MYuxM8DaiUeKuTUKL
          source_id: s_PTsQuwWX6iChr4rf66ZztN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PTsQuwWX6iChr4rf66ZztN
            source_type: api_record
            title: 维基数据：王氏（Q65803780）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803780
            external_identifier: Q65803780
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1NF87sVFpQQxFAWtWRe43k
        subject_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4BxX8G7Lup5E39zssEE6px
          claim_id: c_1NF87sVFpQQxFAWtWRe43k
          source_id: s_PTsQuwWX6iChr4rf66ZztN
          stance: supports
          locator: Q65803780
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ai4vuKyM33Z3FBqjqT7pyi
          claim_id: c_1NF87sVFpQQxFAWtWRe43k
          source_id: s_3f8UP9pJr7FH9cdZ6rSzrZ
          stance: supports
          locator: Q65803780
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_3f8UP9pJr7FH9cdZ6rSzrZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（145252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145252&o=json
            external_identifier: CBDB:145252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:04.187Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H3CKCf9jmCUJzmtGPEKehL
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ws9GzGP3equdVnVCQd4wup
          claim_id: c_H3CKCf9jmCUJzmtGPEKehL
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_JUL1YwHkFxbpiuRSjV2v39
          claim_id: c_H3CKCf9jmCUJzmtGPEKehL
          source_id: s_PTsQuwWX6iChr4rf66ZztN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_YQucbG3n9hiwnLeHVv8cba
          claim_id: c_H3CKCf9jmCUJzmtGPEKehL
          source_id: s_HmJsV2rPiCVdpEMRJrZ3CS
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HmJsV2rPiCVdpEMRJrZ3CS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（186695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186695&o=json
            external_identifier: CBDB:186695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.735Z
            metadata_json: null
      object_person:
        id: p_c8C8PQBtyD8TinfV8tVU4U
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mjVwM62vKQL4EV4coNDENn
        subject_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Hr9mf3hFTf1JYmwnu4JWuS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MiDpoFW72kWybiipKpv3Sy
          claim_id: c_mjVwM62vKQL4EV4coNDENn
          source_id: s_PTsQuwWX6iChr4rf66ZztN
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_G2rqt2q12C68xVQPXU9XJA
          claim_id: c_mjVwM62vKQL4EV4coNDENn
          source_id: s_VuBmUMHDjHucVSdUXoEuU3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_VuBmUMHDjHucVSdUXoEuU3
            source_type: api_record
            title: 维基数据：卢惕（Q45655083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655083
            external_identifier: Q45655083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_WNGQavioC2dVddiuzi6VEZ
          claim_id: c_mjVwM62vKQL4EV4coNDENn
          source_id: s_3f8UP9pJr7FH9cdZ6rSzrZ
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a2
      object_person:
        id: p_Hr9mf3hFTf1JYmwnu4JWuS
        status: active
        display_name: 卢惕
        merged_into_person_id: null
    - claim:
        id: c_yKDJmenef2mHJ8JqeohBhR
        subject_person_id: p_Hr9mf3hFTf1JYmwnu4JWuS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ7cRz0tA0axOl7DLuHK18
          claim_id: c_yKDJmenef2mHJ8JqeohBhR
          source_id: s_fWvvFL1XPY9XPGfj5zKbLi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fWvvFL1XPY9XPGfj5zKbLi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：盧惕（185864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185864&o=json
            external_identifier: CBDB:185864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_Hr9mf3hFTf1JYmwnu4JWuS
        status: active
        display_name: 卢惕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏（卒于810年），王澄女。维基数据以独立条目 Q65803780 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| death.date | 810年 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c8C8PQBtyD8TinfV8tVU4U | 王澄 | accepted |
| spouses | p_Hr9mf3hFTf1JYmwnu4JWuS | 卢惕 | accepted |
| spouses | p_Hr9mf3hFTf1JYmwnu4JWuS | 卢惕 | accepted |

## 外部来源

- [维基数据：卢惕（Q45655083）](https://www.wikidata.org/wiki/Q45655083)
- [维基数据：王澄（Q45685584）](https://www.wikidata.org/wiki/Q45685584)
- [维基数据：王氏（Q65803780）](https://www.wikidata.org/wiki/Q65803780)
- [CBDB 中国历代人物传记资料库：盧惕（185864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185864&o=json)
- [CBDB 中国历代人物传记资料库：王澄（186695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186695&o=json)
- [CBDB 中国历代人物传记资料库：王氏（145252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145252&o=json)
