---
schema: wang-person/v1
id: p_Vc4KSHcWPJTX2XxpAyurEv
status: active
merged_into: null
display_name: 王賡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z728XZtyNrMAtypHyVtG2g
        subject_person_id: p_Vc4KSHcWPJTX2XxpAyurEv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EnHeMLYTzNf2Bhr7jPjF9T
          claim_id: c_z728XZtyNrMAtypHyVtG2g
          source_id: s_oXuRn1EdpeQ5ZPKKRvEvQE
          stance: supports
          locator: CBDB:64899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（64899）
          source: &a1
            id: s_oXuRn1EdpeQ5ZPKKRvEvQE
            source_type: api_record
            title: 中国历代人物传记资料库：王賡（CBDB 64899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64899&o=json
            external_identifier: CBDB:64899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6pej25HZmr2CD7Hj4buGmE
        subject_person_id: p_Vc4KSHcWPJTX2XxpAyurEv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1877年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TPsocHY22QFZ4vE2i63t32
          claim_id: c_6pej25HZmr2CD7Hj4buGmE
          source_id: s_oXuRn1EdpeQ5ZPKKRvEvQE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YwxJxCruTmoFQX2iHPFHK7
        subject_person_id: p_Vc4KSHcWPJTX2XxpAyurEv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1946年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F8QsE15sDhibFaiZjLgqTr
          claim_id: c_YwxJxCruTmoFQX2iHPFHK7
          source_id: s_oXuRn1EdpeQ5ZPKKRvEvQE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jLPZeykwoEvhij5FQJ34Y5
        subject_person_id: p_Vc4KSHcWPJTX2XxpAyurEv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡（1877年—1946年），中華民國人物。籍贯合肥，入仕進士。（中国历代人物传记资料库 CBDB 64899）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs___pJ1YUTOqdl8U43O4imtD
          claim_id: c_jLPZeykwoEvhij5FQJ34Y5
          source_id: s_oXuRn1EdpeQ5ZPKKRvEvQE
          stance: supports
          locator: CBDB:64899
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡 | accepted |
| birth.date | 1877年 | accepted |
| death.date | 1946年 | accepted |
| bio.summary | 王賡（1877年—1946年），中華民國人物。籍贯合肥，入仕進士。（中国历代人物传记资料库 CBDB 64899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡（CBDB 64899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64899&o=json)
