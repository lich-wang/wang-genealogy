---
schema: wang-person/v1
id: p_aiZ62BS2EQTso11n9YhdVB
status: active
merged_into: null
display_name: 丁肇圣
cbdb_id: 122753
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Og8XFrb1SpV_s13OecxRIY
        subject_person_id: p_aiZ62BS2EQTso11n9YhdVB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁肇圣，清人物。CBDB 记录其籍贯记录为山陰。中国历代人物传记资料库（CBDB）以人物编号 122753 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_twRDyOb2GF99Fmd3N7SDY2
          claim_id: c_Og8XFrb1SpV_s13OecxRIY
          source_id: s_7sLuYRBFnRNQ5pc2to67Vp
          stance: supports
          locator: CBDB:122753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7sLuYRBFnRNQ5pc2to67Vp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：丁肇聖（122753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122753&o=json
            external_identifier: CBDB:122753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:05.016Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rrLoVTe2n3y8CBYXwfDMS9
        subject_person_id: p_aiZ62BS2EQTso11n9YhdVB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁肇圣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_THanNj7ma7zNLgHnE2SChM
          claim_id: c_rrLoVTe2n3y8CBYXwfDMS9
          source_id: s_7sLuYRBFnRNQ5pc2to67Vp
          stance: supports
          locator: Q45650746
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_cAfK18g2zBBYuG2ob53EFS
          claim_id: c_rrLoVTe2n3y8CBYXwfDMS9
          source_id: s_7B3x9dkZADzv9NSWxFRzDT
          stance: supports
          locator: Q45650746
          quotation: null
          interpretation_note: null
          source:
            id: s_7B3x9dkZADzv9NSWxFRzDT
            source_type: api_record
            title: 维基数据：丁肇圣（Q45650746）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45650746
            external_identifier: Q45650746
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
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
        id: c_UzStJ4TGsLdXcRxgnKyZq2
        subject_person_id: p_9hqaAttpMTjD5ynf4T1ycM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aiZ62BS2EQTso11n9YhdVB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A4FQAGTJiEEg2JoySjxn63
          claim_id: c_UzStJ4TGsLdXcRxgnKyZq2
          source_id: s_8aB887GAmsozbqMAmUr4qx
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_8aB887GAmsozbqMAmUr4qx
            source_type: api_record
            title: 维基数据：王端淑（Q10416295）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416295
            external_identifier: Q10416295
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.281Z
            metadata_json: null
        - id: cs_PQGRwSaRWp7zMigWpSkjr4
          claim_id: c_UzStJ4TGsLdXcRxgnKyZq2
          source_id: s_7B3x9dkZADzv9NSWxFRzDT
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7B3x9dkZADzv9NSWxFRzDT
            source_type: api_record
            title: 维基数据：丁肇圣（Q45650746）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45650746
            external_identifier: Q45650746
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
        - id: cs_Yv5S4GHo2DW2xvB1xCcMtJ
          claim_id: c_UzStJ4TGsLdXcRxgnKyZq2
          source_id: s_9pfCsfRTJSrS8pYp5fJckN
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_9pfCsfRTJSrS8pYp5fJckN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王端淑（55720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55720&o=json
            external_identifier: CBDB:55720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:40.235Z
            metadata_json: null
      object_person:
        id: p_9hqaAttpMTjD5ynf4T1ycM
        status: active
        display_name: 王端淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丁肇圣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 丁肇圣，清人物。CBDB 记录其籍贯记录为山陰。中国历代人物传记资料库（CBDB）以人物编号 122753 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 丁肇圣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9hqaAttpMTjD5ynf4T1ycM | 王端淑 | accepted |

## 外部来源

- [维基数据：丁肇圣（Q45650746）](https://www.wikidata.org/wiki/Q45650746)
- [维基数据：王端淑（Q10416295）](https://www.wikidata.org/wiki/Q10416295)
- [CBDB 中国历代人物传记资料库：丁肇聖（122753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122753&o=json)
- [CBDB 中国历代人物传记资料库：王端淑（55720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55720&o=json)
