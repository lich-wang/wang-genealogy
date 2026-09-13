---
schema: wang-person/v1
id: p_eNv5d7w4KD4ugJ5YeDzYxk
status: active
merged_into: null
display_name: 王汝耀
cbdb_id: 314231
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ncyd8JRpnxBM1C6bs5WyDS
        subject_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝耀，明人物。嘉靖二十九年進士，籍贯金華，入仕監生。（中国历代人物传记资料库 CBDB 314231）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_P0O2baoFZyepJj9oFIbGDR
          claim_id: c_Ncyd8JRpnxBM1C6bs5WyDS
          source_id: s_GiA3YYcKhAReHQTRSEtteg
          stance: supports
          locator: CBDB:314231
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GiA3YYcKhAReHQTRSEtteg
            source_type: api_record
            title: 中国历代人物传记资料库：王汝耀（CBDB 314231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json
            external_identifier: CBDB:314231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tLLPfbzC5RHQVLcoMNFNbi
        subject_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DAJhHuc9SqAXBx6oKwNZot
          claim_id: c_tLLPfbzC5RHQVLcoMNFNbi
          source_id: s_GiA3YYcKhAReHQTRSEtteg
          stance: supports
          locator: CBDB:314231
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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
  descendants: []
  other: []
---

# 王汝耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝耀，明人物。嘉靖二十九年進士，籍贯金華，入仕監生。（中国历代人物传记资料库 CBDB 314231） | accepted |
| name.primary | 王汝耀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝耀（CBDB 314231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json)
