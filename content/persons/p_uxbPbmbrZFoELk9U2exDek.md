---
schema: wang-person/v1
id: p_uxbPbmbrZFoELk9U2exDek
status: active
merged_into: null
display_name: 王明藻
cbdb_id: 26508
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MYuEWySiAngqKXGwDnAMER
        subject_person_id: p_uxbPbmbrZFoELk9U2exDek
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明藻，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26508 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_And55894mI9N8-AxcAYSiM
          claim_id: c_MYuEWySiAngqKXGwDnAMER
          source_id: s_eKwmYL7nLxMQFFXfwgAYus
          stance: supports
          locator: CBDB:26508
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eKwmYL7nLxMQFFXfwgAYus
            source_type: api_record
            title: 中国历代人物传记资料库：王明藻（CBDB 26508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26508&o=json
            external_identifier: CBDB:26508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Sr6CpcVLJG9e6CcMfbKWn
        subject_person_id: p_uxbPbmbrZFoELk9U2exDek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X4vT1RVQHKrSH6qtbbRHpX
          claim_id: c_6Sr6CpcVLJG9e6CcMfbKWn
          source_id: s_eKwmYL7nLxMQFFXfwgAYus
          stance: supports
          locator: CBDB:26508
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_eKwmYL7nLxMQFFXfwgAYus
            source_type: api_record
            title: 中国历代人物传记资料库：王明藻（CBDB 26508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26508&o=json
            external_identifier: CBDB:26508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UXN-sjoIiwLFGlQmIjk_u0
        subject_person_id: p_uxbPbmbrZFoELk9U2exDek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cwbh9wpjTvaKjxCHWK9B5U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7BAi_UphosFhojHVL7kEj
          claim_id: c_UXN-sjoIiwLFGlQmIjk_u0
          source_id: s_BuHoYXg6ME4S6dT7rJWJfi
          stance: supports
          locator: CBDB 双向互证（父 王明藻 ⇄ 子 王湛）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BuHoYXg6ME4S6dT7rJWJfi
            source_type: api_record
            title: 中国历代人物传记资料库：王湛（CBDB 2128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2128&o=json
            external_identifier: CBDB:2128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cwbh9wpjTvaKjxCHWK9B5U
        status: active
        display_name: 王湛
        merged_into_person_id: null
    - claim:
        id: c_w2VBjzyBTL0qNCOQloo-AK
        subject_person_id: p_uxbPbmbrZFoELk9U2exDek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYJOdBYZoEdzecoQjoyZGX
          claim_id: c_w2VBjzyBTL0qNCOQloo-AK
          source_id: s_eKwmYL7nLxMQFFXfwgAYus
          stance: supports
          locator: CBDB 双向互证（子 王汲 ⇄ 父 王明藻）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_HFQK5L8YrnKx1CYJmv1MtZ
        status: active
        display_name: 王汲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cOVOM827kmS10kxvq5-AuU
        subject_person_id: p_88WC4Q1BzPCRUnQHKcX984
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uxbPbmbrZFoELk9U2exDek
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fB3L-uaVMMDnXxPwabgOjx
          claim_id: c_cOVOM827kmS10kxvq5-AuU
          source_id: s_UPM7btK78ccPWgZ4akAvDK
          stance: supports
          locator: CBDB 双向互证（孫 王明藻 ⇄ 祖父 王福）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UPM7btK78ccPWgZ4akAvDK
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 26507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26507&o=json
            external_identifier: CBDB:26507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_88WC4Q1BzPCRUnQHKcX984
        status: active
        display_name: 王福
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王明藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王明藻，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26508 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王明藻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cwbh9wpjTvaKjxCHWK9B5U | 王湛 | accepted |
| children | p_HFQK5L8YrnKx1CYJmv1MtZ | 王汲 | accepted |
| ancestors | p_88WC4Q1BzPCRUnQHKcX984 | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 26507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26507&o=json)
- [中国历代人物传记资料库：王明藻（CBDB 26508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26508&o=json)
- [中国历代人物传记资料库：王湛（CBDB 2128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2128&o=json)
