---
schema: wang-person/v1
id: p_1C9G5XBRDC7u6iXVfxU3HA
status: active
merged_into: null
display_name: 王郁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7e8tLPDNL66q4dRszcAGFM
        subject_person_id: p_1C9G5XBRDC7u6iXVfxU3HA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3mVbC1PKQD18aBdmuVYBcb
          claim_id: c_7e8tLPDNL66q4dRszcAGFM
          source_id: s_zN9QfQxtwpMKo93CJE9iBC
          stance: supports
          locator: CBDB:270738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270738）
          source: &a1
            id: s_zN9QfQxtwpMKo93CJE9iBC
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 270738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270738&o=json
            external_identifier: CBDB:270738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BFbNQU34TEE4uYB2oPMigK
        subject_person_id: p_1C9G5XBRDC7u6iXVfxU3HA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁，明人物。景泰五年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 270738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zy_RzZsuToYC9DN7rR11hO
          claim_id: c_BFbNQU34TEE4uYB2oPMigK
          source_id: s_zN9QfQxtwpMKo93CJE9iBC
          stance: supports
          locator: CBDB:270738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nkNqws36FALLzQLApW7BEz
        subject_person_id: p_1C9G5XBRDC7u6iXVfxU3HA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_He4MQneKrf3FsxiWWRGQhR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDgEfeDHFFK2cUqjjkUPfW
          claim_id: c_nkNqws36FALLzQLApW7BEz
          source_id: s_zN9QfQxtwpMKo93CJE9iBC
          stance: supports
          locator: 景泰五年進士登科錄，第三甲第一百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_He4MQneKrf3FsxiWWRGQhR
        status: active
        display_name: 王瓘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郁 | accepted |
| bio.summary | 王郁，明人物。景泰五年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 270738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_He4MQneKrf3FsxiWWRGQhR | 王瓘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王郁（CBDB 270738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270738&o=json)
