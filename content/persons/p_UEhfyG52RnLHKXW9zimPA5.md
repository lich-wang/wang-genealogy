---
schema: wang-person/v1
id: p_UEhfyG52RnLHKXW9zimPA5
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 257864
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NTgZkXuSxDr29NfX5QM6l8
        subject_person_id: p_UEhfyG52RnLHKXW9zimPA5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEijtop52FVFVI-SyBJrzV
          claim_id: c_NTgZkXuSxDr29NfX5QM6l8
          source_id: s_NNklhiVhsSXtQD3IJUewSd
          stance: supports
          locator: CBDB:257864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NNklhiVhsSXtQD3IJUewSd
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王軒妻)（CBDB 257864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257864&o=json
            external_identifier: CBDB:257864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BQF8fUUmB6pDFesxIP62JG
        subject_person_id: p_UEhfyG52RnLHKXW9zimPA5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OZcS9PsCXasAavmbhBPLcE
          claim_id: c_BQF8fUUmB6pDFesxIP62JG
          source_id: s_NNklhiVhsSXtQD3IJUewSd
          stance: supports
          locator: CBDB:257864
          quotation: null
          interpretation_note: CBDB 明确记录的王軒配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vahn_nL42PGyr-TXll0V1U
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UEhfyG52RnLHKXW9zimPA5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4EP2dCg5o0sDdMZ3DpOM7
          claim_id: c_vahn_nL42PGyr-TXll0V1U
          source_id: s_NNklhiVhsSXtQD3IJUewSd
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6zgueKBTLH65ghccEBpJUs
        status: active
        display_name: 王軒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257864） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6zgueKBTLH65ghccEBpJUs | 王軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王軒妻)（CBDB 257864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257864&o=json)
