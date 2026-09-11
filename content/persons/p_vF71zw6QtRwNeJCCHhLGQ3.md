---
schema: wang-person/v1
id: p_vF71zw6QtRwNeJCCHhLGQ3
status: active
merged_into: null
display_name: 王惟善
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mHoaH41Y6GQKxx2V4Ht6gi
        subject_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ueMKhe9nW1yFJq3Ng9bZhH
          claim_id: c_mHoaH41Y6GQKxx2V4Ht6gi
          source_id: s_FTY82EgHLMnu2svfRLKoFQ
          stance: supports
          locator: CBDB:203836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203836）
          source: &a1
            id: s_FTY82EgHLMnu2svfRLKoFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 203836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203836&o=json
            external_identifier: CBDB:203836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HpPFFq4HTq5e1dDhcZ8HyP
        subject_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmoh2WMbL71PiijYALvrFh
          claim_id: c_HpPFFq4HTq5e1dDhcZ8HyP
          source_id: s_FTY82EgHLMnu2svfRLKoFQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N9b66ip5Ji4GZ1rQeieSG5
        subject_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TW49X8153bSLSDqATr719
          claim_id: c_N9b66ip5Ji4GZ1rQeieSG5
          source_id: s_FTY82EgHLMnu2svfRLKoFQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
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
        id: c_wlBMftiJetbR5ektjQqUhc
        subject_person_id: p_HDCNWautmCwMm5GuinNqs6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_abNMtOC5UDkIIAVl_1jqVa
          claim_id: c_wlBMftiJetbR5ektjQqUhc
          source_id: s_YgMbZaBtAx5gMUstsua2mX
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百一十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YgMbZaBtAx5gMUstsua2mX
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 310741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310741&o=json
            external_identifier: CBDB:310741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HDCNWautmCwMm5GuinNqs6
        status: active
        display_name: 王迪
        merged_into_person_id: null
    - claim:
        id: c_lny-DSgZCC_ZClOEDmMXBd
        subject_person_id: p_oQsfGJvpB6D3cVd5wxtaBM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6-T5R-NIv4l4SicukCH-35
          claim_id: c_lny-DSgZCC_ZClOEDmMXBd
          source_id: s_TDT9LiJLa9JYNn8PbEQibk
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百一十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TDT9LiJLa9JYNn8PbEQibk
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 310739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310739&o=json
            external_identifier: CBDB:310739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oQsfGJvpB6D3cVd5wxtaBM
        status: active
        display_name: 王和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惟善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟善 | accepted |
| birth.date | 1518年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_HDCNWautmCwMm5GuinNqs6 | 王迪 | accepted |
| ancestors | p_oQsfGJvpB6D3cVd5wxtaBM | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 310741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310741&o=json)
- [中国历代人物传记资料库：王和（CBDB 310739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310739&o=json)
- [中国历代人物传记资料库：王惟善（CBDB 203836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203836&o=json)
