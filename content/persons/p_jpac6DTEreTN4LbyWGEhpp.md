---
schema: wang-person/v1
id: p_jpac6DTEreTN4LbyWGEhpp
status: active
merged_into: null
display_name: 林公選
revision: 1
cbdb_id: 11076
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cAmd4m5gNXSH9Og2mc3pfv
        subject_person_id: p_jpac6DTEreTN4LbyWGEhpp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "林公選（1192—1242），宋人物。籍贯福清，入仕恩蔭: 遺表蔭補。（中国历代人物传记资料库 CBDB 11076）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nwaj3BLwDywNtatNZlnn5Y
          claim_id: c_cAmd4m5gNXSH9Og2mc3pfv
          source_id: s_q3E57nzqjmQ6QeYYbL8Su5
          stance: supports
          locator: CBDB:11076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_q3E57nzqjmQ6QeYYbL8Su5
            source_type: api_record
            title: 中国历代人物传记资料库：林公選（CBDB 11076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11076&o=json
            external_identifier: CBDB:11076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KYz3VReJdGRnIWjIcFjAE9
        subject_person_id: p_jpac6DTEreTN4LbyWGEhpp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林公選
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__U2beGjjTSH80YMfHpbiX6
          claim_id: c_KYz3VReJdGRnIWjIcFjAE9
          source_id: s_q3E57nzqjmQ6QeYYbL8Su5
          stance: supports
          locator: CBDB:11076
          quotation: null
          interpretation_note: CBDB 明确记录的王淨慧配偶
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
        id: c_OFyih2t3_b0m3mbRPnVooV
        subject_person_id: p_FAWjE7PaLwMDYApRM42Xa9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jpac6DTEreTN4LbyWGEhpp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KgM7gKXXAVdCOHHQlPPCOp
          claim_id: c_OFyih2t3_b0m3mbRPnVooV
          source_id: s_q3E57nzqjmQ6QeYYbL8Su5
          stance: supports
          locator: 宋人傳記資料索引(電子版)，7568;7569：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FAWjE7PaLwMDYApRM42Xa9
        status: active
        display_name: 王淨慧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林公選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 林公選（1192—1242），宋人物。籍贯福清，入仕恩蔭: 遺表蔭補。（中国历代人物传记资料库 CBDB 11076） | accepted |
| name.primary | 林公選 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FAWjE7PaLwMDYApRM42Xa9 | 王淨慧 | accepted |

## 外部来源

- [中国历代人物传记资料库：林公選（CBDB 11076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11076&o=json)
