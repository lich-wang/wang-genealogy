---
schema: wang-person/v1
id: p_dJj6NuaLRaohrqoTudZvBt
status: active
merged_into: null
display_name: 王慶
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vHxHgae3aMpeYcANZn8t2C
        subject_person_id: p_dJj6NuaLRaohrqoTudZvBt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w5G2GJK9zUGF8AL7vLWeBL
          claim_id: c_vHxHgae3aMpeYcANZn8t2C
          source_id: s_2qfwzQGpgaN2ALxueHairj
          stance: supports
          locator: CBDB:200978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200978）
          source: &a1
            id: s_2qfwzQGpgaN2ALxueHairj
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 200978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200978&o=json
            external_identifier: CBDB:200978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kjkHpQiasqH8wo5CfA474B
        subject_person_id: p_dJj6NuaLRaohrqoTudZvBt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ADp2NjXkZZG7zGdCpvCRL
          claim_id: c_kjkHpQiasqH8wo5CfA474B
          source_id: s_2qfwzQGpgaN2ALxueHairj
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
        id: c_KvP8ELRjPbWU26bfrusm1Y
        subject_person_id: p_dJj6NuaLRaohrqoTudZvBt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶（生于1459年），明人物。明清進士進士，籍贯平山，入仕進士。（中国历代人物传记资料库 CBDB 200978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2IcB77utqoxqRK6RuRF6p0
          claim_id: c_KvP8ELRjPbWU26bfrusm1Y
          source_id: s_2qfwzQGpgaN2ALxueHairj
          stance: supports
          locator: CBDB:200978
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wk5BITdbCbDbi4SqNCmcu6
        subject_person_id: p_vbAFBvD8E37BdKu2jDuyt9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dJj6NuaLRaohrqoTudZvBt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QjucAuVxzLnPhD7CA32WMQ
          claim_id: c_Wk5BITdbCbDbi4SqNCmcu6
          source_id: s_eisnB7QtGBwPxHij9MZTrM
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eisnB7QtGBwPxHij9MZTrM
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 265486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265486&o=json
            external_identifier: CBDB:265486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vbAFBvD8E37BdKu2jDuyt9
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FQUYiRB0-2LH4nolRm3_NW
        subject_person_id: p_8MqHrKyQJm4DCK5auZ9vkj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dJj6NuaLRaohrqoTudZvBt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FaFk-j1LTUa3Kv7O3n9qCs
          claim_id: c_FQUYiRB0-2LH4nolRm3_NW
          source_id: s_JSbLMAGpYFFt96oFGRxVUk
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JSbLMAGpYFFt96oFGRxVUk
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 263782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263782&o=json
            external_identifier: CBDB:263782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8MqHrKyQJm4DCK5auZ9vkj
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_5rm_1jurD1FHKQBZDf-7gl
        subject_person_id: p_Mf2cCNPP13nfvHrxcNv96C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dJj6NuaLRaohrqoTudZvBt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3lxfYeJmXGJkUfBF_42ER
          claim_id: c_5rm_1jurD1FHKQBZDf-7gl
          source_id: s_fqisWyj3jSQfT9RTdRSV6B
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fqisWyj3jSQfT9RTdRSV6B
            source_type: api_record
            title: 中国历代人物传记资料库：王仁美（CBDB 263780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263780&o=json
            external_identifier: CBDB:263780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Mf2cCNPP13nfvHrxcNv96C
        status: active
        display_name: 王仁美
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | 王慶（生于1459年），明人物。明清進士進士，籍贯平山，入仕進士。（中国历代人物传记资料库 CBDB 200978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vbAFBvD8E37BdKu2jDuyt9 | 王璋 | accepted |
| ancestors | p_8MqHrKyQJm4DCK5auZ9vkj | 王讓 | accepted |
| ancestors | p_Mf2cCNPP13nfvHrxcNv96C | 王仁美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 200978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200978&o=json)
- [中国历代人物传记资料库：王讓（CBDB 263782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263782&o=json)
- [中国历代人物传记资料库：王仁美（CBDB 263780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263780&o=json)
- [中国历代人物传记资料库：王璋（CBDB 265486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265486&o=json)
