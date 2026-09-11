---
schema: wang-person/v1
id: p_x5chVJWUxFzThLSZwhLKJP
status: active
merged_into: null
display_name: 王唐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EBWfzEtV2rgjuBUGn1n1vH
        subject_person_id: p_x5chVJWUxFzThLSZwhLKJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vod5tdQXBrUDQNy3azwh6Z
          claim_id: c_EBWfzEtV2rgjuBUGn1n1vH
          source_id: s_inWucc8M8AV8fqd8LdY3mC
          stance: supports
          locator: CBDB:37993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37993）
          source: &a1
            id: s_inWucc8M8AV8fqd8LdY3mC
            source_type: api_record
            title: 中国历代人物传记资料库：王唐（CBDB 37993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37993&o=json
            external_identifier: CBDB:37993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FqV8FBspLAUju1Bc3ww9FM
        subject_person_id: p_x5chVJWUxFzThLSZwhLKJP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1224年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Qwi5XChjkMczeF9Eqj8Lo
          claim_id: c_FqV8FBspLAUju1Bc3ww9FM
          source_id: s_inWucc8M8AV8fqd8LdY3mC
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
        id: c_QUMTvTckPtGQ8S582qCQys
        subject_person_id: p_x5chVJWUxFzThLSZwhLKJP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐（生于1224年），宋人物。寶祐進士，籍贯永春，入仕進士。（中国历代人物传记资料库 CBDB 37993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_asT6QT6cw-obx0JfylAr-i
          claim_id: c_QUMTvTckPtGQ8S582qCQys
          source_id: s_inWucc8M8AV8fqd8LdY3mC
          stance: supports
          locator: CBDB:37993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UYD_0yf8SSSUBSzXtcPSXV
        subject_person_id: p_6GGJVngcs8ogdZy2FpEF4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x5chVJWUxFzThLSZwhLKJP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EHCukaF5VS5MWtT7EIhMo
          claim_id: c_UYD_0yf8SSSUBSzXtcPSXV
          source_id: s_PYdJ3bPsrZPp2Ae2zELaqV
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PYdJ3bPsrZPp2Ae2zELaqV
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 38800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38800&o=json
            external_identifier: CBDB:38800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6GGJVngcs8ogdZy2FpEF4u
        status: active
        display_name: 王煥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NmdRPeYTb27YxXuSppWwwH
        subject_person_id: p_TyATMdhDLQE6uXtZeEgytP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x5chVJWUxFzThLSZwhLKJP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j34TT2COeY2GYnHX7jHfK7
          claim_id: c_NmdRPeYTb27YxXuSppWwwH
          source_id: s_mW7BpTS8i3S12SDY1dZ9ra
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mW7BpTS8i3S12SDY1dZ9ra
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 137926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137926&o=json
            external_identifier: CBDB:137926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TyATMdhDLQE6uXtZeEgytP
        status: active
        display_name: 王璿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王唐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王唐 | accepted |
| birth.date | 1224年 | accepted |
| bio.summary | 王唐（生于1224年），宋人物。寶祐進士，籍贯永春，入仕進士。（中国历代人物传记资料库 CBDB 37993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6GGJVngcs8ogdZy2FpEF4u | 王煥 | accepted |
| ancestors | p_TyATMdhDLQE6uXtZeEgytP | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煥（CBDB 38800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38800&o=json)
- [中国历代人物传记资料库：王唐（CBDB 37993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37993&o=json)
- [中国历代人物传记资料库：王璿（CBDB 137926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137926&o=json)
