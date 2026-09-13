---
schema: wang-person/v1
id: p_s45QjoKtzGxYWn92iAyF1v
status: active
merged_into: null
display_name: 王尊素
cbdb_id: 236430
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PntUQAnwq1sHeb64mjraNr
        subject_person_id: p_s45QjoKtzGxYWn92iAyF1v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尊素，明人物。籍贯益都。（中国历代人物传记资料库 CBDB 236430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NmV7hguATT7mtSDE2ZLoR5
          claim_id: c_PntUQAnwq1sHeb64mjraNr
          source_id: s_CgQDiqKGwijHEkesDBTViy
          stance: supports
          locator: CBDB:236430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CgQDiqKGwijHEkesDBTViy
            source_type: api_record
            title: 中国历代人物传记资料库：王尊素（CBDB 236430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236430&o=json
            external_identifier: CBDB:236430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rGak8meZXnzvFpxx6sZPpm
        subject_person_id: p_s45QjoKtzGxYWn92iAyF1v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尊素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6GeX2xRijHMNkNMQrki1sn
          claim_id: c_rGak8meZXnzvFpxx6sZPpm
          source_id: s_CgQDiqKGwijHEkesDBTViy
          stance: supports
          locator: CBDB:236430
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lCpDdbBy2m-EtlGFVwAcr-
        subject_person_id: p_fRd4kHJooaS9AErLa6rFp5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s45QjoKtzGxYWn92iAyF1v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CjRS4Vug5yLfBPxUKWi8Kr
          claim_id: c_lCpDdbBy2m-EtlGFVwAcr-
          source_id: s_CgQDiqKGwijHEkesDBTViy
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CgQDiqKGwijHEkesDBTViy
            source_type: api_record
            title: 中国历代人物传记资料库：王尊素（CBDB 236430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236430&o=json
            external_identifier: CBDB:236430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fRd4kHJooaS9AErLa6rFp5
        status: active
        display_name: 王瀠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尊素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尊素，明人物。籍贯益都。（中国历代人物传记资料库 CBDB 236430） | accepted |
| name.primary | 王尊素 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fRd4kHJooaS9AErLa6rFp5 | 王瀠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尊素（CBDB 236430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236430&o=json)
