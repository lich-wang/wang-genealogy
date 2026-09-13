---
schema: wang-person/v1
id: p_nYBJ8DhUaL2NcKE4G7AVS7
status: active
merged_into: null
display_name: 王希遠
cbdb_id: 237765
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8vMQL1BeGVdvV44f72XH8n
        subject_person_id: p_nYBJ8DhUaL2NcKE4G7AVS7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希遠，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 237765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FiDfJ_AgOBOo_1F9oa31UN
          claim_id: c_8vMQL1BeGVdvV44f72XH8n
          source_id: s_a4fKydkrtkN7vhSHyj4bzM
          stance: supports
          locator: CBDB:237765
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a4fKydkrtkN7vhSHyj4bzM
            source_type: api_record
            title: 中国历代人物传记资料库：王希遠（CBDB 237765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237765&o=json
            external_identifier: CBDB:237765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DwXRLeqJuXELbKco5Ya21c
        subject_person_id: p_nYBJ8DhUaL2NcKE4G7AVS7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y86WLhTUc2jxGzdtLCGALv
          claim_id: c_DwXRLeqJuXELbKco5Ya21c
          source_id: s_a4fKydkrtkN7vhSHyj4bzM
          stance: supports
          locator: CBDB:237765
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ClVu-0E6DgN7futdSG-7hF
        subject_person_id: p_nYBJ8DhUaL2NcKE4G7AVS7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpz9nZJ4vRQmBCgN1EdE5_
          claim_id: c_ClVu-0E6DgN7futdSG-7hF
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VYJvgz4n1AbQdfJrLeEkYN
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 199491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json
            external_identifier: CBDB:199491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5CduZYd3M32UzBRfFgkTNy
        status: active
        display_name: 王祿
        merged_into_person_id: null
    - claim:
        id: c_zLI21julB9X0tgsplp55zG
        subject_person_id: p_nYBJ8DhUaL2NcKE4G7AVS7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_t5oHeornqu2QNuT9xayaao
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aKaZtNqT06zwiFO8Lh8ILw
          claim_id: c_zLI21julB9X0tgsplp55zG
          source_id: s_a4fKydkrtkN7vhSHyj4bzM
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a4fKydkrtkN7vhSHyj4bzM
            source_type: api_record
            title: 中国历代人物传记资料库：王希遠（CBDB 237765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237765&o=json
            external_identifier: CBDB:237765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_t5oHeornqu2QNuT9xayaao
        status: active
        display_name: 王英
        merged_into_person_id: null
  other: []
---

# 王希遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希遠，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 237765） | accepted |
| name.primary | 王希遠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5CduZYd3M32UzBRfFgkTNy | 王祿 | accepted |
| descendants | p_t5oHeornqu2QNuT9xayaao | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 199491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json)
- [中国历代人物传记资料库：王希遠（CBDB 237765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237765&o=json)
