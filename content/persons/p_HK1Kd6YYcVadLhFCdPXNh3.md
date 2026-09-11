---
schema: wang-person/v1
id: p_HK1Kd6YYcVadLhFCdPXNh3
status: active
merged_into: null
display_name: 王文燠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCprNe6eFcS23e5noJZaLH
        subject_person_id: p_HK1Kd6YYcVadLhFCdPXNh3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文燠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fVjD81hp25erw2enYA8G43
          claim_id: c_DCprNe6eFcS23e5noJZaLH
          source_id: s_Sftkgc5eT4bdm3JY9wJxMD
          stance: supports
          locator: CBDB:266761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266761）
          source: &a1
            id: s_Sftkgc5eT4bdm3JY9wJxMD
            source_type: api_record
            title: 中国历代人物传记资料库：王文燠（CBDB 266761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266761&o=json
            external_identifier: CBDB:266761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5AF9Ush1AzeUohShZHffPT
        subject_person_id: p_HK1Kd6YYcVadLhFCdPXNh3
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
        - id: cs_P2QVdzKeJTWhqGwi1eAqPZ
          claim_id: c_5AF9Ush1AzeUohShZHffPT
          source_id: s_Sftkgc5eT4bdm3JY9wJxMD
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
  ancestors: []
  descendants:
    - claim:
        id: c_RNqJBhoBcdlN-NjnF5YyyU
        subject_person_id: p_HK1Kd6YYcVadLhFCdPXNh3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cP2X-L4QE_37KTGShFgrC-
          claim_id: c_RNqJBhoBcdlN-NjnF5YyyU
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nsNS4tYiMyfHMLUzeivoSe
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 126892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json
            external_identifier: CBDB:126892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJMiNXJSvn8avCPNUFL6Jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  other: []
---

# 王文燠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文燠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aJMiNXJSvn8avCPNUFL6Jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文燠（CBDB 266761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266761&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 126892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json)
