---
schema: wang-person/v1
id: p_EanU2yYn4vz2RKu9z2UR1n
status: active
merged_into: null
display_name: 王惠
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z6ZwJ1DSMar7LK41Avh7jq
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_As4QgYAhKQPuS2xJb7SE6F
          claim_id: c_Z6ZwJ1DSMar7LK41Avh7jq
          source_id: s_UYEW9WvvLvRRmaHcD9W67z
          stance: supports
          locator: CBDB:248390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248390）
          source: &a1
            id: s_UYEW9WvvLvRRmaHcD9W67z
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 248390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248390&o=json
            external_identifier: CBDB:248390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GXYth3YAbBfQ4i6QVR8NTV
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248390）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r_wnvWidwP9wWf4QQnED83
          claim_id: c_GXYth3YAbBfQ4i6QVR8NTV
          source_id: s_UYEW9WvvLvRRmaHcD9W67z
          stance: supports
          locator: CBDB:248390
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_08XvFfhmR89HTOBk4gD9dx
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zO9h7NrJxeAO_Eh8Qo1mnp
          claim_id: c_08XvFfhmR89HTOBk4gD9dx
          source_id: s_5GP2mniHEp9CPhLt9j6mmn
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第六十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5GP2mniHEp9CPhLt9j6mmn
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 126711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json
            external_identifier: CBDB:126711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2XRBAyxJK1NzbNZAjugN5q
        status: active
        display_name: 王盛
        merged_into_person_id: null
    - claim:
        id: c_EzU-v4ndVsEBDWlYI0LRdK
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8w7YBQ9cDWQuQqw388uLdQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OL6QAu7nIgd-Gqo0oJ0ttD
          claim_id: c_EzU-v4ndVsEBDWlYI0LRdK
          source_id: s_2QPprWkczTvArgBWDuCH9J
          stance: supports
          locator: CBDB：兄弟 王盛（126711）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王厚 与 王盛 为同胞（CBDB 记「兄」），王盛 之父／母即 王厚 之父／母。
          source:
            id: s_2QPprWkczTvArgBWDuCH9J
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 248396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248396&o=json
            external_identifier: CBDB:248396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8w7YBQ9cDWQuQqw388uLdQ
        status: active
        display_name: 王厚
        merged_into_person_id: null
    - claim:
        id: c_yPbEEjX9D2r8w3apbYshzc
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E9WLQPhsr5vRTjFKJnJMEh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qAQ7QGLYIYsnGMTTbjPPTI
          claim_id: c_yPbEEjX9D2r8w3apbYshzc
          source_id: s_DTcHynTbJeLB83MC_L8Ntd
          stance: supports
          locator: CBDB：兄弟 王盛（126711）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王榮 与 王盛 为同胞（CBDB 记「弟」），王盛 之父／母即 王榮 之父／母。
          source:
            id: s_DTcHynTbJeLB83MC_L8Ntd
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 248393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248393&o=json
            external_identifier: CBDB:248393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E9WLQPhsr5vRTjFKJnJMEh
        status: active
        display_name: 王榮
        merged_into_person_id: null
    - claim:
        id: c_uMgv86RVN_7TGXSKuS_Anw
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hgxRnHvk5m37QSULgGGvpN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9BmjUXviNsRaKWzLw_vPfq
          claim_id: c_uMgv86RVN_7TGXSKuS_Anw
          source_id: s_Jx8vJSRSMusr8lfU5p4C-n
          stance: supports
          locator: CBDB：兄弟 王盛（126711）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王盛 为同胞（CBDB 记「弟」），王盛 之父／母即 王昌 之父／母。
          source:
            id: s_Jx8vJSRSMusr8lfU5p4C-n
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 248394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json
            external_identifier: CBDB:248394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hgxRnHvk5m37QSULgGGvpN
        status: active
        display_name: 王昌
        merged_into_person_id: null
    - claim:
        id: c_dl0ZtceYap78WTEQxlqFAv
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oEx5JqZovWjAWmN242q9VM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xeGCqljs4fbrJG1M92Ojt_
          claim_id: c_dl0ZtceYap78WTEQxlqFAv
          source_id: s_lPu9PfE8TD_YEffuilisMK
          stance: supports
          locator: CBDB：兄弟 王盛（126711）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王敦 与 王盛 为同胞（CBDB 记「兄」），王盛 之父／母即 王敦 之父／母。
          source:
            id: s_lPu9PfE8TD_YEffuilisMK
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 248395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json
            external_identifier: CBDB:248395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oEx5JqZovWjAWmN242q9VM
        status: active
        display_name: 王敦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | 王惠，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248390） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2XRBAyxJK1NzbNZAjugN5q | 王盛 | accepted |
| children | p_8w7YBQ9cDWQuQqw388uLdQ | 王厚 | accepted |
| children | p_E9WLQPhsr5vRTjFKJnJMEh | 王榮 | accepted |
| children | p_hgxRnHvk5m37QSULgGGvpN | 王昌 | accepted |
| children | p_oEx5JqZovWjAWmN242q9VM | 王敦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 248394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json)
- [中国历代人物传记资料库：王敦（CBDB 248395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json)
- [中国历代人物传记资料库：王厚（CBDB 248396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248396&o=json)
- [中国历代人物传记资料库：王惠（CBDB 248390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248390&o=json)
- [中国历代人物传记资料库：王榮（CBDB 248393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248393&o=json)
- [中国历代人物传记资料库：王盛（CBDB 126711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126711&o=json)
