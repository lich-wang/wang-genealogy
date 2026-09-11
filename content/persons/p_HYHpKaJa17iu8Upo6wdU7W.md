---
schema: wang-person/v1
id: p_HYHpKaJa17iu8Upo6wdU7W
status: active
merged_into: null
display_name: 王育
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JAaHzR7A7j7m7xuMnhD23
        subject_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aX2GUcnVtW2KGHBH1kiC2n
          claim_id: c_2JAaHzR7A7j7m7xuMnhD23
          source_id: s_uYpWo4b3o5i6i7tLGYTY3b
          stance: supports
          locator: CBDB:208149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208149）
          source: &a1
            id: s_uYpWo4b3o5i6i7tLGYTY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 208149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208149&o=json
            external_identifier: CBDB:208149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kcEiV4HBXmeUPKzL65MYMp
        subject_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1418年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MSSyKsH6mS7qUCqG48WFo
          claim_id: c_kcEiV4HBXmeUPKzL65MYMp
          source_id: s_uYpWo4b3o5i6i7tLGYTY3b
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
        id: c_NnR4VRABtDoGrHUBrHwqCK
        subject_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育（生于1418年），明人物。正統十三年進士，籍贯安州，入仕進士。（中国历代人物传记资料库 CBDB 208149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oUV6_YhyaL3TKoJirfK5XY
          claim_id: c_NnR4VRABtDoGrHUBrHwqCK
          source_id: s_uYpWo4b3o5i6i7tLGYTY3b
          stance: supports
          locator: CBDB:208149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W-c_cB7LzTx3bhVwTQiws_
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y20TUeKhEzR94muwmwf6oz
          claim_id: c_W-c_cB7LzTx3bhVwTQiws_
          source_id: s_7qtDC6A3rHT3TNaBnpurLs
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7qtDC6A3rHT3TNaBnpurLs
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 241084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241084&o=json
            external_identifier: CBDB:241084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HJQdCKF1NWQxF4BJ2ijpLL
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_90kD-u_EXDIrVBML87VTLm
        subject_person_id: p_C3cZLnk6RSUF5EqxLUVQiw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ifqaZhzOgotnEmT29K0WUj
          claim_id: c_90kD-u_EXDIrVBML87VTLm
          source_id: s_UYUH2pRhTjaxzQLqV22TCQ
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UYUH2pRhTjaxzQLqV22TCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 241083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241083&o=json
            external_identifier: CBDB:241083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C3cZLnk6RSUF5EqxLUVQiw
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_xqEaNcMCR4vgkkM8Am6aXY
        subject_person_id: p_ua5krNPGJgzwR73W4Jck6v
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HDu3n9wFGjB2I1qcxFeIfQ
          claim_id: c_xqEaNcMCR4vgkkM8Am6aXY
          source_id: s_R9yqVNhqdncnoYKQyu7izx
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R9yqVNhqdncnoYKQyu7izx
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 241082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241082&o=json
            external_identifier: CBDB:241082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ua5krNPGJgzwR73W4Jck6v
        status: active
        display_name: 王友諒
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王育

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育 | accepted |
| birth.date | 1418年 | accepted |
| bio.summary | 王育（生于1418年），明人物。正統十三年進士，籍贯安州，入仕進士。（中国历代人物传记资料库 CBDB 208149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HJQdCKF1NWQxF4BJ2ijpLL | 王珪 | accepted |
| ancestors | p_C3cZLnk6RSUF5EqxLUVQiw | 王忠 | accepted |
| ancestors | p_ua5krNPGJgzwR73W4Jck6v | 王友諒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 241084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241084&o=json)
- [中国历代人物传记资料库：王友諒（CBDB 241082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241082&o=json)
- [中国历代人物传记资料库：王育（CBDB 208149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208149&o=json)
- [中国历代人物传记资料库：王忠（CBDB 241083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241083&o=json)
