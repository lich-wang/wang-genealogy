---
schema: wang-person/v1
id: p_qH965HRtNLEtPyefHwgvpn
status: active
merged_into: null
display_name: 王宗吉
cbdb_id: 262879
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CfU4LRh6njagqKs8a4YU6o
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗吉，明人物。中国历代人物传记资料库（CBDB）以人物编号 262879 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_s8wDhVCiODkIcZmNW8Fre9
          claim_id: c_CfU4LRh6njagqKs8a4YU6o
          source_id: s_zHpi8Q6czXNCLh1NU52MFu
          stance: supports
          locator: CBDB:262879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zHpi8Q6czXNCLh1NU52MFu
            source_type: api_record
            title: 中国历代人物传记资料库：王宗吉（CBDB 262879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262879&o=json
            external_identifier: CBDB:262879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ncy4yTaf7kaD4RAUhADrYK
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DPCopEvscF3xG7Va7CWMMd
          claim_id: c_ncy4yTaf7kaD4RAUhADrYK
          source_id: s_zHpi8Q6czXNCLh1NU52MFu
          stance: supports
          locator: CBDB:262879
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_zHpi8Q6czXNCLh1NU52MFu
            source_type: api_record
            title: 中国历代人物传记资料库：王宗吉（CBDB 262879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262879&o=json
            external_identifier: CBDB:262879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1N2mkv4ukXNxA73MxKU5c3
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vS4Kzjgv4fYK1EkhDfWocF
          claim_id: c_1N2mkv4ukXNxA73MxKU5c3
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YEFc76BF7d689AbSJF4e5B
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 126636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json
            external_identifier: CBDB:126636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        status: active
        display_name: 王哲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗吉，明人物。中国历代人物传记资料库（CBDB）以人物编号 262879 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宗吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8Z1UQ2GEaLW3fJdsaEnJcd | 王哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王哲（CBDB 126636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json)
- [中国历代人物传记资料库：王宗吉（CBDB 262879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262879&o=json)
